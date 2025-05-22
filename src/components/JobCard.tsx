import React from "react";
import { Card, CardContent, Typography, Chip, Stack } from "@mui/material";
import type { Job } from "../types";

export const JobCard: React.FC<{ job: Job; onClick: () => void }> = ({ job, onClick }) => {
    return (
        <Card onClick={onClick} sx={{ cursor: "pointer", mb: 2 }}>
            <CardContent>
                <Typography variant="h6">{job.title}</Typography>
                <Typography variant="subtitle2">{job.company}</Typography>
                <Typography variant="body2">{job.location} — {job.type}</Typography>
                <Stack direction="row" spacing={1} mt={1}>
                    {job.tags.map((tag) => (
                        <Chip key={tag} label={tag} />
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );
};

