import { useContext, useEffect } from "react";
import { exportTasksToJson } from "../utils";
import { UserContext } from "../contexts/UserContext";

/**
 * Custom React hook that enables saving tasks to JSON when the user presses Ctrl + S
 */
export const useCtrlS = (): void => {
    const { user } = useContext(UserContext);
    const { tasks } = user;

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Check if the key combination is Ctrl + S
            if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "S")) {
                e.preventDefault();
                
                const userConfirmed = window.confirm("Do you want to save all tasks to JSON file?");

                if(userConfirmed) {
                    exportTasksToJson(tasks);
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }
    }, [tasks]);
};
