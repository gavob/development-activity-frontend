export const searchGitHubRepos = async (searchTerm) => {
    try {
        const res = await fetch(
            `http://localhost:8080/dev_activity/search_repos/${searchTerm}`, { method: 'GET' }
        );
        const data = await res.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
        return [];
    }
}

export const getRepoActivityAnalysis = async (repoName) => {
    try {
        const res = await fetch(
            `http://localhost:8080/dev_activity/repo_details/${repoName}`, { method: 'GET' }
        );
        const data = await res.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
        return {};
    }
}