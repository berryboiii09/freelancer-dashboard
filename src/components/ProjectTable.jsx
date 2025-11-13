import React from "react";
import "./ProjectTable.css"; // optional separate styling file

const ProjectTable = () => {
    const projects = [
        {
            name: "E-Commerce Website",
            project: "Online Store",
            description: "Full-stack web app for selling clothes",
            client: "Fashion Hub",
            dateStarted: "2025-01-15",
            deadline: "2025-02-20",
        },
        {
            name: "Analytics Dashboard",
            project: "Data Visualization",
            description: "Built with React and Recharts",
            client: "TechMetrics",
            dateStarted: "2025-02-01",
            deadline: "2025-03-10",
        },
        {
            name: "Social Media Insights",
            project: "Data Dashboard",
            description: "Engagement and reach tracking system",
            client: "TechMetrics",
            dateStarted: "2025-03-05",
            deadline: "2025-04-10",
        },
        {
            name: "Portfolio Website",
            project: "Frontend Build",
            description: "Responsive React portfolio for designer",
            client: "Emily Carter",
            dateStarted: "2025-03-15",
            deadline: "2025-04-01",
        },
        {
            name: "Landing Page",
            project: "Marketing Page",
            description: "High-converting landing page for SaaS",
            client: "Launchify",
            dateStarted: "2025-04-10",
            deadline: "2025-04-20",
        },
        {
            name: "Email Campaign Tool",
            project: "SaaS Platform",
            description: "Automated email system with analytics",
            client: "Launchify",
            dateStarted: "2025-05-01",
            deadline: "2025-06-05",
        },
        {
            name: "Task Tracker",
            project: "Productivity Tool",
            description: "To-do web app with drag and drop",
            client: "FocusLab",
            dateStarted: "2025-05-05",
            deadline: "2025-06-01",
        },
        {
            name: "Restaurant Website",
            project: "Website Revamp",
            description: "Menu system and online reservations",
            client: "TastyBites",
            dateStarted: "2025-05-10",
            deadline: "2025-06-20",
        },
        {
            name: "Blog Platform",
            project: "CMS Build",
            description: "Custom blog platform using MERN stack",
            client: "EduWise",
            dateStarted: "2025-06-15",
            deadline: "2025-07-30",
        },
        {
            name: "Online Exam System",
            project: "Education App",
            description: "Timed quiz platform with scoring system",
            client: "EduWise",
            dateStarted: "2025-07-01",
            deadline: "2025-08-15",
        },
        {
            name: "Learning Dashboard",
            project: "Analytics Tool",
            description: "Tracks student progress across courses",
            client: "EduWise",
            dateStarted: "2025-08-01",
            deadline: "2025-09-01",
        },
        {
            name: "Hotel Booking System",
            project: "Booking App",
            description: "Hotel reservation and admin dashboard",
            client: "StayEasy",
            dateStarted: "2025-07-20",
            deadline: "2025-09-01",
        },
        {
            name: "Weather App",
            project: "API Integration",
            description: "Weather forecast using OpenWeather API",
            client: "ClimateNow",
            dateStarted: "2025-08-01",
            deadline: "2025-08-20",
        },
        {
            name: "Inventory Manager",
            project: "Business Tool",
            description: "Tracks stock and sales reports",
            client: "ShopPro",
            dateStarted: "2025-08-15",
            deadline: "2025-09-25",
        },
        {
            name: "Marketing Dashboard",
            project: "Performance Reports",
            description: "Campaign performance dashboard",
            client: "Launchify",
            dateStarted: "2025-09-01",
            deadline: "2025-09-25",
        },
        {
            name: "Online Learning Portal",
            project: "Education Platform",
            description: "Course management system with video lessons",
            client: "EduWise",
            dateStarted: "2025-09-10",
            deadline: "2025-11-01",
        },
        {
            name: "Crypto Tracker",
            project: "Finance Dashboard",
            description: "Real-time crypto price tracking app",
            client: "CoinPilot",
            dateStarted: "2025-10-01",
            deadline: "2025-11-10",
        },
        {
            name: "Social Media Clone",
            project: "Frontend + Backend",
            description: "Full social platform using MERN",
            client: "NetSpace",
            dateStarted: "2025-10-15",
            deadline: "2025-12-01",
        },
        {
            name: "News Aggregator",
            project: "Content Feed",
            description: "Collects and displays news articles by topic",
            client: "DailyStream",
            dateStarted: "2025-11-01",
            deadline: "2025-11-30",
        },
        {
            name: "VR Product Demo",
            project: "3D Showcase",
            description: "Interactive 3D demo using Unity WebGL",
            client: "VisionXR",
            dateStarted: "2025-11-10",
            deadline: "2025-12-25",
        },
    ];

    return (
        <div className="table-container">
            <h2>Active Projects</h2>
            <table className="project-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Project</th>
                    <th>Description</th>
                    <th>Client</th>
                    <th>Date Started</th>
                    <th>Deadline</th>
                </tr>
                </thead>
                <tbody>
                {projects.map((proj, index) => (
                    <tr key={index}>
                        <td>{proj.name}</td>
                        <td>{proj.project}</td>
                        <td>{proj.description}</td>
                        <td>{proj.client}</td>
                        <td>{proj.dateStarted}</td>
                        <td>{proj.deadline}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectTable;
