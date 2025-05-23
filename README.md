# Job Listings App

A responsive job listing application built with React and Material UI. Users can search for jobs by title or company, filter them by tags, and view detailed job information in a modal. Jobs can also be saved locally.

## 🚀 Live Demo
[View on Vercel](https://job-board-app-8p2k.vercel.app/) <!-- Replace with actual link or remove if not available -->

## 🛠 Setup Instructions

1. **Clone the repository**
   ```bash
   https://github.com/solik003/job-board-app.git
   cd job-board-app
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the development server**
   ```bash
   npm run dev
   ```

##  Features Completed
Job listing with responsive grid layout

Search functionality (by title or company)

Filter jobs by tags

View job details in a modal

Save/unsave jobs with persistent state

Clean and responsive UI using Material UI

## Challenges Faced
Ensuring smooth filtering performance – solved with useMemo for memoization.
Managing tag filters and search state – addressed using custom hooks.

## If I Had More Time
Add pagination for large job datasets.
Connect to a real API or Firebase backend.
Implement Redux Toolkit to manage global state such as saved jobs and filters
Implement mui skeleton loaders