import React from "react";
import { Box, Typography, Modal, Chip, Stack } from "@mui/material";
import type { Job } from "../types";

type Props = {
    open: boolean;
    onClose: () => void;
    job: Job | null;
};

export const JobDetailsModal: React.FC<Props> = ({ open, onClose, job }) => {
    if (!job) return null;

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: "90%", sm: 500 },
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    boxShadow: 24,
                    p: { xs: 2, sm: 4 },
                    overflowY: "auto",
                }}
            >
                <Typography variant="h5" mb={1}>
                    {job.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {job.company}
                </Typography>
                <Typography variant="body2" mb={2}>
                    {job.location} — {job.type}
                </Typography>

                <Typography variant="subtitle2" gutterBottom>
                    Tags:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                    {job.tags.map((tag) => (
                        <Chip key={tag} label={tag} />
                    ))}
                </Stack>

                <Typography variant="subtitle2" gutterBottom>
                    Job Description:
                </Typography>
                <Typography variant="body1" color="text.primary">
                    {job.description}
                </Typography>
            </Box>
        </Modal>
    );
};
