import React from "react";
import Cards from "../components/Cards.jsx";
import Chart from "../components/Chart.jsx";
import CalendarCard from "../components/Calender.jsx";
import Activities from "../components/Activities.jsx";

const Dashboard = () => {
    const pieData = [
        { name: "Planning", value: 1, color: "#007bff" },
        { name: "In Progress", value: 4, color: "#28a745" },
        { name: "Completed", value: 15, color: "#dc3545" },
    ];

    const barData = [
        { name: "Jan", value: 400 },
        { name: "Feb", value: 380 },
        { name: "Mar", value: 520 },
        { name: "Apr", value: 450 },
        { name: "May", value: 600 },
        { name: "Jun", value: 480 },
        { name : "Jul", value: 720 },
        { name : "Aug", value: 560 },
        { name : "Sep", value: 640 },
        { name : "Oct", value: 700 },
        { name : "Nov", value: 580 },
    ];
    const recentActivities = [
        { title: "New Project Started", description: "Began 'Marketing Dashboard' for Launchify", date: "2025-11-08" },
        { title: "Project Completed", description: "Delivered 'Crypto Tracker' dashboard to CoinPilot", date: "2025-11-05" },
        { title: "Client Feedback Received", description: "Positive feedback from EduWise for Online Learning Portal", date: "2025-11-03" },
        { title: "New Client Added", description: "Started collaboration with VisionXR on 3D Product Demo", date: "2025-11-01" },
    ];

    return (
        <div>
            <div className="cards">
                <Cards pic={"💻"} title={"Total Projects"} data={"20"} />
                <Cards pic={"💵"} title={"Lifetime Earnings"} data={"$6,780"} />
                <Cards pic={"🧑"} title={"No. of Clients"} data={"14"} />
            </div>

            <div
                style={{
                    display: "grid",
                    gap: "1.5rem",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    padding: "2rem",
                }}
            >
                <Chart title="Tasks Status" data={pieData} type="pie" color="#007bff" />
                <Chart title="Monthly Income" data={barData} type="bar" color="blue" />
                <div className="activities-container">
                    <h2>Recent Activities</h2>
                    {recentActivities.map((a, i) => (
                        <Activities key={i} title={a.title} description={a.description} date={a.date} />
                    ))}
                </div>
                <CalendarCard />
            </div>
        </div>
    );
};

export default Dashboard;
