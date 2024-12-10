import styled from "@emotion/styled";
import {
    AddRounded,
    EditRounded,
    ExpandMoreRounded,
    RadioButtonChecked
} from "@mui/icons-material";
import { 
    Box,
    Button,
    Divider,
    FormControl,
    FormLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    useTheme
} from "@mui/material";
import { Emoji } from "emoji-picker-react";
import { CSSProperties, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CategoryBadge } from "./CategoryBadge";
import { MAX_CATEGORIES_IN_TASK } from "../constants";
import { UserContext } from "../contexts/UserContext";
import type { Category, UUID } from "../types/user";
import { getFontColor, showToast } from "../utils";
import { ColorPalette } from "../theme/themeConfig";
import { useSystemTheme } from "../hooks/useSystemTheme";
import { isDarkMode } from "../theme/createTheme";

export const CategorySelect = () => {
    return (
        <></>
    );
};