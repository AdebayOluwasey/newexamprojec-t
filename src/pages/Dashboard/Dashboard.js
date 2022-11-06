import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useGetUser } from "../../CustomHooks/useGetUser";


const Dashboard = () => {

    // get data from currently logged user from the custom hook
    const data = useGetUser("user");
    console.log(data)
    
    return (
        <>
            <Helmet>
                <title>Delish Model's Dashboard</title>
                <meta name="description" content="You are logged in. See dashboard content" />
                <link rel="canonical" href="/dashboard" />
            </Helmet>
            {
                data.isAuthenticated &&
                <div className="dashboardcontainer">
                    <h1>Currently Logged in User</h1>
                    <div className="card-container">
                        <div className="card">
                            <img src={data.user.image} alt="Avatar" />
                            <div className="container">
                                <h4><b>Username: {data.user.username}</b></h4>
                                <p>Password: {data.user.password}</p>
                            </div>

                        </div>
                    </div>


                </div>
            }
        </>
    );
}

export default Dashboard;