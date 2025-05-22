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
            <Box>
                {job ? (
                    <>
                        <Typography variant="h5" mb={1}>{job.title}</Typography>
                        <Typography variant="subtitle1">{job.company}</Typography>
                        <Typography variant="body2" mb={2}>
                            {job.location} — {job.type}
                        </Typography>
                        <Typography variant="subtitle2">Tags:</Typography>
                        <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
                            {job.tags.map((tag) => (
                                <Chip key={tag} label={tag} />
                            ))}
                        </Stack>
                    </>
                ) : (
                    <Typography>Loading...</Typography>
                )}
            </Box>
        </Modal>

    );
};
