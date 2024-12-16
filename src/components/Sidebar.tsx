import { Keyframes, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { 
    AddRounded,
    AdjustRounded,
    BugReportRounded,
    CategoryRounded,
    DeleteForeverRounded,
    DownloadDoneRounded,
    Favorite,
    FavoriteRounded,
    FiberManualRecord,
    GetAppRounded,
    GitHub,
    InstallDesktopRounded,
    InstallMobileRounded,
    IosShareRounded,
    Logout,
    PhoneIphoneRounded,
    SettingsRounded,
    StarRounded,
    TaskAltRounded,
    ThumbUpRounded
} from "@mui/icons-material";
import { 
    Dialog,
    DialogActions,
    DialogContent,
    Divider,
    IconButton,
    MenuItem,
    SwipeableDrawer,
    Tooltip
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CustomDialogTitle, SettingsDialog } from ".";
import bmcLogoLight from "../assets/bmc-logo-light.svg";
import bmcLogo from "../assets/bmc-logo.svg";
import logo from "../assets/logo256.png";
import { defaultUser } from "../constants/defaultUser";
import { UserContext } from "../contexts/UserContext";
import { fetchBMCInfo } from "../services/bmcApi";
import { fetchGitHubInfo } from "../services/githubApi";
import { DialogBtn, UserAvatar, pulseAnimation, ring } from "../styles";
import { ColorPalette } from "../theme/themeConfig";
import { showToast, systemInfo, timeAgo } from "../utils";

export const ProfileSidebar = () => {
    return (
        <div></div>
    );
};
