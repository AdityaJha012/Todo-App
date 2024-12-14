import styled from "@emotion/styled";
import {
    DataObjectRounded,
    DeleteForeverRounded,
    DescriptionRounded,
    ErrorOutlineRounded,
    ExpandMoreRounded,
    FileDownload,
    RefreshRounded
} from "@mui/icons-material";
import { 
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    Button,
    ButtonProps,
    Dialog,
    DialogActions,
    DialogContent,
    Typography
} from "@mui/material";
import { Emoji } from "emoji-picker-react";
import React, { ErrorInfo } from "react";
import { CustomDialogTitle, TaskIcon } from ".";
import { UserContext } from "../contexts/UserContext";
import { DialogBtn, StyledLink } from "../styles";
import { exportTasksToJson, getFontColor, showToast } from "../utils";

const Container = styled.div`
    margin: 0 8vw;
    @media (max-width: 768px) {
        margin: 0;
    }
`;

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
    openClearDialog: boolean;
}

/**
 * ErrorBoundary component that catches and displays them.
 */
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    static contextType = UserContext;
    declare context: React.ContextType<typeof UserContext>;

    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            openClearDialog: false
        };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return {
            hasError: true,
            error: error,
            openClearDialog: false
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error("Error:", error);
        console.error("Error Info:", errorInfo);

        // This fixes issues with caching where dynamically imported modules fail to load due to changed asset names in new builds.
        if (
            error.message.includes("Failed to fetch dynamically imported") ||
            error.message.includes("is not a valid JavaScript")
        ) {
            showToast("Reloading Page", { type: "loading" });

            const retries = parseInt(sessionStorage.getItem("reload_retries") || "0", 10);

            if (retries < 3) {
                setTimeout(() => {
                    sessionStorage.setItem("reload_retries", String(retries + 1));
                    location.reload();
                }, 1000);
            }
        }
    }

    handleOpenDialog = () => {
        this.setState({ openClearDialog: true });
    };
    
    handleCloseDialog = () => {
        this.setState({ openClearDialog: false });
    };

    handleConfirmClearData = () => {
        localStorage.clear();
        sessionStorage.clear();
        location.reload();
    };

    render(): React.ReactNode {
        if(this.state.hasError) {
            const { user } = this.context;
            const { tasks } = user;

            return (
                <Container></Container>
            )
        }
    }
}

export default ErrorBoundary;
