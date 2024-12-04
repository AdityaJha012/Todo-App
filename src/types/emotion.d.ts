import "@emotion/react"

declare module "@emotion/react" {
    export interface Theme {
        /**
         * Emotion Primary Color
         */
        primary: string;

        /**
         * Emotion Background Color
         */
        secondary: string;

        /**
         * Emotion Darkmode
         */
        darkMode: boolean;
    }
}