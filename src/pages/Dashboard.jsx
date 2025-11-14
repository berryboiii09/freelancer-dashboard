import React,{useContext}from "react";
import Cards from "../components/Cards.jsx";
import Chart from "../components/Chart.jsx";
import CalendarCard from "../components/Calender.jsx";
import Activities from "../components/Activities.jsx";
import { pieData, barData } from "../data/ChartsData.js";
import {recentActivities} from "../data/Activities.js";
import {OverviewData} from "../data/OverviewData.js";
import {UserContext} from "../context/UserContext.jsx";

const Dashboard = () => {
    const {user} = useContext(UserContext);
    return (
        <div>
            <h1 style={{
                padding: "2rem 0 0 2rem",
            }}>Welcome Back, {user.username}!</h1>
            <div className="cards">
                {OverviewData.map((card, index) => (
                    <Cards key={index} {...card} />
                ))}
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
                    {recentActivities.map((activity, index) => (
                        <Activities key={index} {...activity} />
                    ))}
                </div>
                <CalendarCard />
            </div>
        </div>
    );
};

export default Dashboard;
