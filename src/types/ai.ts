// types for window.ai experimental chrome api
// https://docs.google.com/document/d/1VG8HIyz361zGduWgNG7R_R8Xkv0OOJ8b5C9QKeCjU0c/view?tab=t.0#heading=h.3vqpk8wufne

interface AICreateMonitor extends EventTarget {
    onDownloadProgress: (e: Event) => void;
}

type AICreateMonitorCallback = (monitor: AICreateMonitor) => void;

type AILanguageModelPromptRole = "system" | "user" | "assistant";

interface AILanguageModelPrompt {
    role: AILanguageModelPromptRole;
    content: string;
}

interface AILanguageModelCreateOptions {
    signal?: AbortSignal;
    monitor?: AICreateMonitorCallback;

    systemPrompt?: string;
    initialPrompts?: AILanguageModelPrompt[];
    topK?: number;
    temperature?: number;
}

interface AILanguageModelPromptOptions {
    signal?: AbortSignal;
}

export interface AILanguageModel extends EventTarget {
    prompt(input: string, options?: AILanguageModelPromptOptions): Promise<string>;
    promptStreaming(input: string, options?: AILanguageModelPromptOptions): ReadableStream;

    countPromptTokens(input: string, options?: AILanguageModelPromptOptions): Promise<number>;
    readonly maxTokens: number;
    readonly tokensSoFar: number;
    readonly tokensLeft: number;
    readonly topK: number;
    readonly temperature: number;

    clone(): Promise<AILanguageModel>;
    destry(): void;
}

type AICapabilityAvailability = "readily" | "after-download" | "no";

interface AILanguageModelCapabilities {
    readonly available: AICapabilityAvailability;
    
    // Always null if available === "no"
    readonly defaultTopK?: number;
    readonly maxTopK?: number;
    readonly defaultTemperature?: number;
}

interface AILanguageModelFactory {
    create(options?: AILanguageModelCreateOptions): Promise<AILanguageModel>;
    capabilities(): Promise<AILanguageModelCapabilities>
}

interface AI {
    readonly languageModel: AILanguageModelFactory;
}

declare global {
    interface Window {
        ai: AI;
    }
}