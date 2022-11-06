import React, { useContext } from "react";
import './Home.css';
import landingpageimage from "../../images/landingpage-image.png";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Button from "../../components/Button";
import { UserAuthContext } from "../../context/UserAuthContext";


const Home = () => {
    const { value, setValue } = useContext(UserAuthContext);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/models')
    }
    const handleLogin =() => {
        navigate('/login')
    }

    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Home to Delish Models" />
                <link rel="canonical" href="/" />
            </Helmet>

            <div className="landingpage-container">


                <div className="landingpage-section1">
                    <div className="landingpage-section1-left">
                        <h1>
                            We deliver <span>
                                the best models for your brand shoots, editorials, commercial billboards, face modelling
                            </span>
                        </h1>
                        <p>
                            Need professional models with poise and class? Book a Delish model!!
                        </p>
                        <div className="buttons">
                            {
                                value.isAuthenticated ?
                                    <Button styleClass="no-border-button" value="See Models" /> :
                                    <> <Button styleClass="blue-button" value="Login" onClick={handleLogin}/>
                                        <Button styleClass="no-border-button" value="View Models" onClick={handleClick}/></>
                            }

                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="landingpage-section1-right">
                        <img src={landingpageimage} alt="LandingPageImage" />
                    </div>
                </div>
                {/* Landing Page Section 2 */}
            </div>
        </>

    );
}

export default Home;