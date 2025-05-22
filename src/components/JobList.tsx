
import React, { useMemo, useState } from "react";
import { useSavedJobs } from "../hooks/useSavedJobs";
import { useJobFilters } from "../hooks/useJobFilters";
import { allTags } from "../constants/tags";
import { jobs } from "../data/jobs";
import { JobCard } from "./JobCard";
import { JobDetailsModal } from "./JobDetailsModal";
import type { Job } from "../types";
import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Typography,
    Grid,
    TextField,
} from "@mui/material";
import { getFilteredJobs } from "../utils/jobFilters";

export const JobList: React.FC = () => {
    const { savedJobs, toggleSavedJob } = useSavedJobs();
    const { selectedTags, toggleTag, searchTerm, setSearchTerm } = useJobFilters();
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [open, setOpen] = useState(false);
    const filteredJobs = useMemo(() => {
        return getFilteredJobs(jobs, searchTerm, selectedTags);
    }, [searchTerm, selectedTags]);

    return (
        <Box px={{ xs: 2, md: 4 }} py={4}>
            <Typography variant="h4" gutterBottom>
                Job Listings
            </Typography>

            <TextField
                label="Search by title or company"
                variant="outlined"
                fullWidth
                sx={{ mb:  { xs: 2, sm: 3 } }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <Typography variant="h6">Filter by Tags:</Typography>
            <FormGroup row sx={{ mb: 3 }}>
                {allTags.map((tag) => (
                    <FormControlLabel
                        key={tag}
                        control={<Checkbox checked={selectedTags.includes(tag)} onChange={() => toggleTag(tag)} />}
                        label={tag}
                    />
                ))}
            </FormGroup>

            <Grid container spacing={3}>
                {filteredJobs.map((job) => (
                    <Grid item xs={12} sm={6} md={4} key={job.id}>
                        <JobCard
                            job={job}
                            onClick={() => {
                                setSelectedJob(job);
                                setOpen(true);
                            }}
                            onSave={toggleSavedJob}
                            isSaved={savedJobs.some((j) => j.id === job.id)}
                        />
                    </Grid>
                ))}
            </Grid>

            <JobDetailsModal open={open} onClose={() => setOpen(false)} job={selectedJob} />
        </Box>
    );
};

