
import { useState } from "react";

export const useJobFilters = (initialTags: string[] = []) => {
    const [selectedTags, setSelectedTags] = useState<string[]>(initialTags);
    const [searchTerm, setSearchTerm] = useState("");

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    return { selectedTags, toggleTag, searchTerm, setSearchTerm };
};
