import { useState, ReactNode } from "react"
import { UUID } from "../types/user"
import { useStorageState } from "../hooks/useStorageState";
import { HighlightedText } from '../components/tasks/tasks.styled';
import { useResponsiveDisplay } from "../hooks/useResponsiveDisplay";
import { TaskContext, TaskContextType } from "./TaskContext";

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [selectedTaskId, setSelectedTaskId] = useState<UUID | null>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorPosition, setAnchorPosition] = useState<{ top: number; left: number } | null>(null);
    const [expandedTasks, setExpandedTasks] = useState<Set<UUID>>(new Set());
    const [multipleSelectedTasks, setMultipleSelectedTasks] = useStorageState<UUID[]>(
        [],
        "seletedTasks",
        "sessionStorage"
    );
    const [search, setSearch] = useStorageState<string>("", "search", "sessionStorage");
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);

    const toggleShowMore = (taskId: UUID) => {
        setExpandedTasks((prevExpandedTasks) => {
            const newSet = new Set(prevExpandedTasks);

            if(newSet.has(taskId)) {
                newSet.delete(taskId);
            } else {
                newSet.add(taskId);
            }

            return newSet
        });
    };

    const handleSelectTask = (taskId: UUID) => {
        setAnchorEl(null);

        setMultipleSelectedTasks((prevExpandedTasks) => {
            if(prevExpandedTasks.includes(taskId)) {
                // Deselect the task if already selected
                return prevExpandedTasks.filter((id) => id !== taskId);
            } else {
                // Select the task if not selected
                return [...prevExpandedTasks, taskId];
            }
        });
    };

    const highlightMatchingText = (text: string): ReactNode => {
        if(!search) {
            return text;
        }

        const parts = text.split(new RegExp(`${search}`, 'gi'));

        return parts.map((part, index) => 
            part.toLowerCase() === search.toLowerCase() ? (
                <HighlightedText key={index}>{part}</HighlightedText>
            ) : (
                part
            ),
        );
    };

    const handleDeleteTask = () => {
        if(selectedTaskId) {
            setDeleteDialogOpen(true);
        }
    };

    const isMobile = useResponsiveDisplay();

    const handleCloseMoreMenu = () => {
        setAnchorEl(null);

        document.body.style.overflow = "visible";

        if(selectedTaskId && !isMobile && expandedTasks.has(selectedTaskId)) {
            toggleShowMore(selectedTaskId);
        }
    };

    const contextValue: TaskContextType = {
        selectedTaskId,
        setSelectedTaskId,
        anchorEl,
        setAnchorEl,
        anchorPosition,
        setAnchorPosition,
        expandedTasks,
        setExpandedTasks,
        toggleShowMore,
        search,
        setSearch,
        highlightMatchingText,
        multipleSelectedTasks,
        setMultipleSelectedTasks,
        handleSelectTask,
        editModalOpen,
        setEditModalOpen,
        handleDeleteTask,
        deleteDialogOpen,
        setDeleteDialogOpen,
        handleCloseMoreMenu
    };

    return <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
};
