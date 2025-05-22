
import React, { useState } from "react";
import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Typography,
    Grid,
    TextField,
} from "@mui/material";
import { jobs as mockJobs } from "../data/jobs";
import { JobCard } from "./JobCard";
import { JobDetailsModal } from "./JobDetailsModal";
import type { Job } from "../types";

const allTags = ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "JavaScript"];

export const JobList: React.FC = () => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [open, setOpen] = useState(false);

    const handleTagChange = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const handleOpenModal = (job: Job) => {
        setSelectedJob(job);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
        setSelectedJob(null);
    };

    const filteredJobs = mockJobs.filter((job) => {
        const matchesSearch =
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesTags =
            selectedTags.length === 0 || selectedTags.every((tag) => job.tags.includes(tag));

        return matchesSearch && matchesTags;
    });

    return (
        <Box p={4}>
            <Typography variant="h4" gutterBottom>
                Job Listings
            </Typography>

            <TextField
                label="Search by title or company"
                variant="outlined"
                fullWidth
                sx={{ mb: 3 }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <Typography variant="h6">Filter by Tags:</Typography>
            <FormGroup row sx={{ mb: 3 }}>
                {allTags.map((tag) => (
                    <FormControlLabel
                        key={tag}
                        control={
                            <Checkbox
                                checked={selectedTags.includes(tag)}
                                onChange={() => handleTagChange(tag)}
                            />
                        }
                        label={tag}
                    />
                ))}
            </FormGroup>

            <Grid container spacing={3}>
                {filteredJobs.map((job) => (
                    <Grid item xs={12} sm={6} md={4} key={job.id}>
                        <JobCard job={job} onClick={() => handleOpenModal(job)} />
                    </Grid>
                ))}
            </Grid>

            <JobDetailsModal open={open} onClose={handleCloseModal} job={selectedJob} />
        </Box>
    );
};
