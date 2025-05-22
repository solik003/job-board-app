import React from "react";
import JobCard from "./components/JobCard";
import { Container } from "@mui/material";
import { jobs } from "./data/jobs";

const JobList = () => {
  return (
    <Container>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onClick={() => console.log(job.title)} />
      ))}
    </Container>
  );
};

export default JobList;

