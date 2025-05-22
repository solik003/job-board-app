export interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    tags: string[];
}

export type JobCardProps = {
    job: Job;
    onClick: () => void;
    onSave: (job: Job) => void;
    isSaved: boolean;
};