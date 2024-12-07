import { useTheme } from "@emotion/react";
import {
    CancelRounded,
    Close,
    Delete,
    DeleteRounded,
    DoneAll,
    DoneRounded,
    Link,
    MoreVert,
    PushPinRounded,
    RadioButtonChecked,
    Search
} from "@mui/icons-material";
import {
    Dialog,
    DialogActions,
    DialogContent,
    IconButton,
    InputAdornment,
    Tooltip
} from "@mui/material";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import { useState, useEffect, useMemo, useContext, useCallback } from "react";
import { URL_REGEX } from "../../constants";
import { TaskContext } from "../../contexts/TaskContext";
import { UserContext } from "../../contexts/UserContext";
import { useCtrlS } from "../../hooks/useCtrlS";
import { useResponsiveDisplay } from "../../hooks/useResponsiveDisplay";
import { useStorageState } from "../../hooks/useStorageState";
import { DialogBtn } from "../../styles";
import { ColorPalette } from "../../theme/themeConfig";
import type { Category, Task, UUID } from "../../types/user"
import {
    calculateDateDifference,
    formatDate,
    getFontColor,
    showToast,
    systemInfo
} from "../../utils";
import { RenderTaskDescription } from "./RenderTaskDescription";
import {
    CategoriesListContainer,
    EmojiContainer,
    NoTasks,
    Pinned,
    RadioChecked,
    RadioUnchecked,
    RingAlarm,
    SearchClear,
    SearchInput,
    SelectedTasksContainer,
    StyledRadio,
    TaskContainer,
    TaskDate,
    TaskDescription,
    TaskHeader,
    TaskInfo,
    TaskName,
    TasksContainer,
    TimeLeft
} from "./tasks.styled";

/**
 * Component to display a list of tasks.
 */
export const TasksList: React.FC = () => {
    const { user, setUser } = useContext(UserContext);
    const {
        selectedTaskId,
        setSelectedTaskId,
        anchorEl,
        setAnchorEl,
        setAnchorPosition,
        expandedTasks,
        toggleShowMore,
        search,
        setSearch,
        highlightMatchingText,
        setMultipleSelectedTasks,
        handleSelectTask,
        editModalOpen,
        setEditModalOpen,
        deleteDialogOpen,
        setDeleteDialogOpen
    } = useContext(TaskContext);
    const open = Boolean(anchorEl);

    return (
        <div></div>
    )
};
