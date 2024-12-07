import { useState, useEffect } from "react";

type StorageType = "localStorage" | "sessionStorage";

export function useStorageState<T>(
    defaultValue: T,
    key: string,
    storageType: StorageType = "localStorage",
): [T, React.Dispatch<React.SetStateAction<T>>] {
    const storage = window[storageType];

    // Initialize state with the stored value or the default value
    const [value, setValue] = useState<T>(() => {
        const storedValue = storage.getItem(key);
        
        return storedValue !== null && storedValue !== undefined && storedValue !== "undefined"
        ? JSON.parse(storedValue)
        : defaultValue
    });

    // Update storage whenever the key or value changes
    useEffect(() => {
        storage.setItem(key, JSON.stringify(value));
    }, [key, value, storage]);

    // Listen for storage events and update state if the key matches
    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if(event.key === key && event.newValue !== null && event.key !== "") {
                setValue(JSON.parse(event.newValue));
            }
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.addEventListener("storage", handleStorageChange);
        };
    });

    // Return the state value and update function
    return [value, setValue];
};

