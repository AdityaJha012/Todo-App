import { useState, useEffect, ReactNode, useContext, useMemo, lazy, Suspense } from "react";
import {
    AddButton,
    GreetingHeader,
    GreetingText,
    Offline,
    ProgressPercentageContainer,
    StyledProgress,
    TaskCompletionText,
    TaskCountHeader,
    TaskCountTextContainer,
    TasksCount,
    TasksCountContainer
} from '../styles';

import { getRandomGreeting } from '../utils';
import { Emoji } from 'emoji-picker-react';
import { Box, Tooltip, Typography } from '@mui/material';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { AddRounded, TodayRounded, WifiOff } from "@mui/icons-material";
import { UserContext } from '../contexts/UserContext';
import { useResponsiveDisplay } from '../hooks/useResponsiveDisplay';
import { useNavigate } from "react-router-dom";
import { TaskProvider } from '../contexts/TaskProvider';

const Home = () => {
    return (
        <div></div>
    );
};

export default Home