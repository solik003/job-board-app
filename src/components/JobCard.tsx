
import React from "react";
import { Card, CardContent, Typography, Chip, Stack, Button } from "@mui/material";
import type { JobCardProps } from "../types";
import { BUTTON_TEXTS } from "../constants/button";

export const JobCard: React.FC<JobCardProps> = ({ job, onClick, onSave, isSaved }) => {
    return (
        <Card sx={{ cursor: "pointer", mb: 2 }}>
            <CardContent onClick={onClick}>
                <Typography variant="h6">{job.title}</Typography>
                <Typography variant="subtitle2">{job.company}</Typography>
                <Typography variant="body2">
                    {job.location} — {job.type}
                </Typography>
                <Stack direction="row" spacing={1} mt={1}>
                    {job.tags.map((tag) => (
                        <Chip key={tag} label={tag} />
                    ))}
                </Stack>
            </CardContent>
            <Button
                variant={isSaved ? "contained" : "outlined"}
                color="primary"
                fullWidth
                onClick={(e) => {
                    e.stopPropagation();
                    onSave(job);
                }}
                sx={{ mt: 1 }}
            >
                {isSaved ? BUTTON_TEXTS.SAVED : BUTTON_TEXTS.SAVE}
            </Button>
        </Card>
    );
};
