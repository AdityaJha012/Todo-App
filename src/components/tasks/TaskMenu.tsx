import styled from "@emotion/styled";
import {
    Cancel,
    Close,
    ContentCopy,
    DeleteRounded,
    Done,
    EditRounded,
    LaunchRounded,
    LinkRounded,
    Pause,
    PlayArrow,
    PushPinRounded,
    RadioButtonChecked,
    RecordVoiceOver,
    RecordVoiceOverRounded,
} from "@mui/icons-material";
import { Divider, IconButton, Menu, MenuItem } from "@mui/material";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import { JSX, useContext, useMemo, useState } from "react";
import Marquee from "react-fast-marquee";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { TaskIcon } from "..";
import { UserContext } from "../../contexts/UserContext";
import { useResponsiveDisplay } from "../../hooks/useResponsiveDisplay";
import { Task } from "../../types/user";
import { calculateDateDifference, generateUUID, showToast } from "../../utils";
import { useTheme } from "@emotion/react";
import { TaskContext } from "../../contexts/TaskContext";
import { ColorPalette } from "../../theme/themeConfig";
import { ShareDialog } from "./ShareDialog";

const SheetHeader = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    color: ${({ theme }) => (theme.darkMode ? ColorPalette.fontLight : ColorPalette.fontDark)};
    margin: 10px;
    font-size: 20px;
`;

const SheetContent = styled.div`
    color: ${({ theme }) => (theme.darkMode ? ColorPalette.fontLight : ColorPalette.fontDark)};
    margin: 20px 10px;
    & .MuiMenuItem-root {
        font-size: 16px;
        padding: 16px;
        &::before {
            content: "",
            display: inline-block;
            margin-right: 10px;
        }
    }
`;

const StyledMenuItem = styled(MenuItem)<{ clr?: string }>`
    margin: 0 6px;
    padding: 12px;
    border-radius: 12px;
    box-shadow: none;
    gap: 2px;
    color: ${({ clr }) => clr || "unset"};
`;

const ReadAloudContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ReadAloudHeader = styled.div`
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    gap: 6px;
`;

const ReadAloudControls = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    gap: 8px;
`;

export const TaskMenu = () => {
    const { user, setUser } = useContext(UserContext);
    const { tasks, settings, emojisStyle } = user;
    const {
        selectedTaskId,
        anchorEl,
        anchorPosition,
        multipleSelectedTasks,
        handleSelectTask,
        setEditModalOpen,
        handleDeleteTask,
        handleCloseMoreMenu
    } = useContext(TaskContext);
    const [showShareDialog, setShowShareDialog] = useState<boolean>(false);

    const isMobile = useResponsiveDisplay();
    const n = useNavigate();
    const theme = useTheme();

    const selectedTask = useMemo(() => {
        return tasks.find((task) => task.id === selectedTaskId) || ({} as Task);
    }, [selectedTaskId, tasks]);

    const redirectToTaskDetails = () => {
        const taskId = selectedTask?.id.toString().replace(".", "");
        n(`/task/${taskId}`);
    };

    const handleMarkAsDone = () => {
        // Toggles the "done" property of the selected task
        if (selectedTaskId) {
            handleCloseMoreMenu();

            const updatedTasks = tasks.map((task) => {
                if (task.id === selectedTaskId) {
                    return { ...task, done: !task.done };
                }

                return task;
            });

            setUser((prevUser) => ({
                ...prevUser,
                tasks: updatedTasks
            }));

            const allTasksDone = updatedTasks.every((task) => task.done);

            if (allTasksDone) {
                showToast(
                    <div>
                        <b>All tasks done</b>
                        <br />
                        <span>You've checked off all your todos. Well done!</span>
                    </div>,
                    {
                        icon: (
                            <div style={{ margin: "-6px 4px -6px -6px" }}>
                                <TaskIcon variant="success" scale={0.18} />
                            </div>
                        ),
                    },
                );
            }
        }
    };

    const handlePin = () => {
        // Toggles the "pinned" property of the selected task
        if (selectedTaskId) {
            handleCloseMoreMenu();

            const updatedTasks = tasks.map((task) => {
                if (task.id === selectedTaskId) {
                    return { ...task, pinned: !task.pinned };
                }

                return task;
            });

            setUser((prevUser) => ({
                ...prevUser,
                tasks: updatedTasks
            }));
        }
    };

    const handleDuplicateTask = () => {
        
    };
};
