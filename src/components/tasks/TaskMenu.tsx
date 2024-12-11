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
    RecordVoiceOverRounded
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
