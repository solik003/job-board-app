import type { Job } from "../types";

export const getFilteredJobs = (
    jobs: Job[],
    searchTerm: string,
    selectedTags: string[]
): Job[] => {
    return jobs.filter((job) => {
        const matchesSearch =
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesTags =
            selectedTags.length === 0 || selectedTags.every((tag) => job.tags.includes(tag));

        return matchesSearch && matchesTags;
    });
};

