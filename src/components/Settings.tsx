import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { 
    BrightnessAutoRounded,
    CachedRounded,
    DarkModeRounded,
    DeleteRounded,
    ExpandMoreRounded,
    Google,
    LightModeRounded,
    Microsoft,
    PersonalVideoRounded,
    SettingsRounded,
    VolumeDown,
    VolumeOff,
    VolumeUp,
    WifiOffRounded
} from "@mui/icons-material";
import { 
    Box,
    Button,
    Chip,
    Dialog,
    DialogActions,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    IconButton,
    MenuItem,
    Select,
    SelectChangeEvent,
    Slider,
    Stack,
    Switch,
    Tooltip
} from "@mui/material";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import { ComponentProps, JSX, ReactElement, useContext, useEffect, useState } from "react";
import { defaultUser } from "../constants/defaultUser";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { useSystemTheme } from "../hooks/useSystemTheme";
import { ColorElement, DialogBtn } from "../styles";
import { Themes } from "../theme/createTheme";
import type { AppSettings, DarkModeOptions } from "../types/user";
import { isDark, showToast, systemInfo } from "../utils";
import { CustomDialogTitle } from "./DialogTitle";

// Array of available emoji styles with their labels
const emojiStyles: { label: string; style: EmojiStyle }[] = [
    { label: "Apple", style: EmojiStyle.APPLE },
    { label: "Facebook, Messenger", style: EmojiStyle.FACEBOOK },
    { label: "Twitter, Discord", style: EmojiStyle.TWITTER },
    { label: "Google", style: EmojiStyle.GOOGLE },
    { label: "Native", style: EmojiStyle.NATIVE },
];

// Array of available dark mode options
const darkModeOptions: {
    label: string;
    mode: DarkModeOptions;
    icon: JSX.Element;
}[] = [
    {
        label: "Auto",
        mode: "auto",
        icon: <BrightnessAutoRounded />
    },
    {
        label: "System",
        mode: "system",
        icon: <PersonalVideoRounded />
    },
    {
        label: "Light",
        mode: "light",
        icon: <LightModeRounded />
    },
    {
        label: "Dark",
        mode: "dark",
        icon: <DarkModeRounded />
    },
];

interface SettingsProps {
    open: boolean;
    onClose: () => void;
}

export const SettingsDialog: React.FC<SettingsProps> = ({ open, onClose }) => {
    return (
        <div onClick={onClose}>{open}</div>
    );
};
