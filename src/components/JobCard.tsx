import React from "react";
import { Card, CardContent, Typography, Box, Chip, Stack } from "@mui/material";
import type { Job } from "../types";


type JobCardProps = {
  job: Job;
  onClick?: () => void;
};

const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  return (
    <Card 
      onClick={onClick} 
      sx={{ 
        cursor: "pointer", 
        mb: 2, 
        transition: "0.3s", 
        "&:hover": { boxShadow: 6 } 
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {job.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {job.company} — {job.location}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          Type: {job.type}
        </Typography>
        <Box mt={2}>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {job.tags.map((tag, index) => (
              <Chip key={index} label={tag} size="small" color="primary" />
            ))}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
