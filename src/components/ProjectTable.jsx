import React from "react";
import "./ProjectTable.css"; // optional separate styling file
import {projects} from "../data/ProjectTable.js";

const ProjectTable = () => {
    return (
        <div className="table-container">
            <h2>Projects</h2>
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
