import type { Task } from "../types/user";

export const exportTasksToJson = (selectedTasks: Task[]): void => {
    // Get the current date and time for the filename
    const timestamp = new Date().toLocaleString().replace(/[/:, ]/g, "_");
    const filename = `Tasks_${timestamp}.json`;

    // Create a JSON blob
    const dateStr = JSON.stringify(selectedTasks, null, 2);
    const blob = new Blob([dateStr], { type: "application/json" });

    // Create a URL for the blob
    const url = window.URL.createObjectURL(blob);

    // Create a link element and initiate the download
    const linkElement = document.createElement("a");
    linkElement.href = url;
    linkElement.download = filename;
    linkElement.click();
    console.log(`Exported tasks to ${filename}`);

    //Clean up the URL Object
    window.URL.revokeObjectURL(url);
};
