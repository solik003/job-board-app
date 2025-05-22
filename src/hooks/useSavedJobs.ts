
import { useState, useEffect } from "react";
import type { Job } from "../types";
import { STORAGE_KEYS } from "../constants/storageKeys";

export const useSavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState<Job[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.SAVED_JOBS);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SAVED_JOBS, JSON.stringify(savedJobs));
  }, [savedJobs]);

  const toggleSavedJob = (job: Job) => {
    setSavedJobs((prev) => {
      const exists = prev.some((j) => j.id === job.id);
      if (exists) {
        return prev.filter((j) => j.id !== job.id);
      } else {
        return [...prev, job];
      }
    });
  };

  return { savedJobs, toggleSavedJob };
};
