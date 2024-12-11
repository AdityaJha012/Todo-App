import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import {
    AddRounded,
    ColorizeRounded,
    ColorLensRounded,
    DoneRounded,
    ExpandMoreRounded,
    InfoRounded
} from  "@mui/icons-material";
import { 
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    Popover,
    Tooltip
} from "@mui/material";
import { getColorName } from "ntc-ts";
import { CSSProperties, useCallback, useContext, useEffect, useRef, useState } from "react";
import { type ToastOptions } from "react-hot-toast";
import { MAX_COLORS_IN_LIST } from "../constants";
import { UserContext } from "../contexts/UserContext";
import { ColorElement, DialogBtn, scale } from "../styles";
import { ColorPalette } from "../theme/themeConfig";
import { getFontColor, isDark, showToast } from "../utils";
import { CustomDialogTitle } from "./DialogTitle";

interface ColorPickerProps {
    color: string;
    onColorChange: (newColor: string) => void;
    width?: CSSProperties["width"];
    fontColor?: CSSProperties["color"];
    label?: string;
}

/**
 * Custom Color Picker component for selecting colors.
 */
export const ColorPicker: React.FC<ColorPickerProps> = ({
    color,
    onColorChange,
    width,
    fontColor,
    label
}) => {
    return (
        <div></div>
    );
}
