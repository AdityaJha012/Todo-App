import styled from "@emotion/styled";
import { CancelRounded, EditCalendarRounded, SaveRounded } from "@mui/icons-material";
import {
    Dialog,
    DialogActions,
    DialogContent,
    IconButton,
    InputAdornment,
    TextField,
    TextFieldProps,
    Tooltip
} from "@mui/material";
import { useContext, useEffect, useMemo, useState } from "react";
import { ColorPicker, CustomDialogTitle, CustomEmojiPicker } from '.';
import { DESCRIPTION_MAX_LENGTH, TASK_NAME_MAX_LENGTH } from "../constants";
import { UserContext } from "../contexts/UserContext";
import { DialogBtn } from "../styles";
import { Category, Task } from "../types/user";
import { showToast } from "../utils";
import { useTheme } from "@emotion/react";
import { ColorPalette } from "../theme/themeConfig";
import { CategorySelect } from "./CategorySelect";
