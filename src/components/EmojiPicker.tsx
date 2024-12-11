import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { 
    AddReaction,
    AutoAwesome,
    Edit,
    EmojiEmotions,
    RemoveCircleOutline
} from "@mui/icons-material";
import { 
    Alert,
    Avatar,
    Badge,
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    Tooltip
} from "@mui/material";
import { Emoji, EmojiClickData, EmojiStyle, SuggestionMode, Theme } from "emoji-picker-react";
import { 
    CSSProperties,
    Dispatch,
    SetStateAction,
    Suspense,
    lazy,
    useContext,
    useEffect,
    useState
} from "react";
import { UserContext } from "../contexts/UserContext";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { DialogBtn, fadeIn } from "../styles";
import { ColorPalette } from "../theme/themeConfig";
import { getFontColor, showToast, systemInfo } from "../utils";
import { CATEGORY_NAME_MAX_LENGTH, TASK_NAME_MAX_LENGTH } from "../constants";
import { CustomDialogTitle } from "./DialogTitle";
import { AILanguageModel } from "../types/ai"

const EmojiPicker = lazy(() => import("emoji-picker-react"));

interface EmojiPickerProps {
    emoji?: string;
    setEmoji: Dispatch<SetStateAction<string | null>>;
    color?: string;
    name?: string;
    type?: "task" | "category";
}
/**
 * Emoji Picker Component for selecting Emojis
 */
export const CustomEmojiPicker = ({ emoji, setEmoji, color, name, type }: EmojiPickerProps) => {
    return (
        <div></div>
    );
}
