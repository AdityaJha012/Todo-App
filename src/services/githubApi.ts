import type { GitHubBranchResponse, GitHubInfoResponse, GitHubRepoResponse } from "../types/github";
import { showToast } from "../utils";

export const fetchGitHubInfo = async (): Promise<GitHubInfoResponse> => {
    const username = "AdityaJha012";
    const repo = "Todo-App";
    const branch = "main";

    try {
        const [repoResponse, branchResponse] = await Promise.all([
            fetch(`https://api.github.com/repos/${username}/${repo}`),
            fetch(`https://api.github.com/repos/${username}/${repo}/branches/${branch}`),
        ]);

        if (repoResponse.ok && branchResponse.ok) {
            const [repoData, branchData] = await Promise.all([
                repoResponse.json() as Promise<GitHubRepoResponse>,
                branchResponse.json() as Promise<GitHubBranchResponse>
            ]);

            return {
                repoData,
                branchData
            };
        } else {
            // Check if rate limit exceeded
            if (repoResponse.status === 403 && branchResponse.status === 403) {
                showToast("Github API rate limit exceeded temporarily for your IP address.", {
                    type: "error",
                    disableVibrate: true
                });
            } else {
                throw new Error("Failed to fetch repository or branch information.");
            }
        }
    } catch (error) {
        console.error(error);

        if (navigator.onLine) {
            showToast("Failed to fetch GitHub API.", { type: "error", disableVibrate: true });
        }
    }

    return { repoData: {}, branchData: {} } as GitHubInfoResponse;
};
