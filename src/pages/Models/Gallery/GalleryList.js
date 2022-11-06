import React from "react";
import './GalleryList.css';
import model1 from "../../../images/model1.jpg";
import model4 from "../../../images/model4.jpg";
import model5 from "../../../images/model5.jpg";
import model7 from "../../../images/model7.jpg";


const GalleryList = () => {
    const userData = [
        {
            id: "1",
            name: "Angela",
            Country: "Nigeria",
            pictureLink: model1
        },
        {
            id: "2",
            name: "Oluwaseyi",
            Country: "Canada",
            pictureLink: model4
        },
        {
            id: "3",
            name: "Ifeoluwa",
            Country: "Brazil",
            pictureLink: model5
        },

        {
            id: "4",
            name: "Eden",
            Country: "Ghana",
            pictureLink: model7
        },

       
    ]
    return (<div className="card-container">

        {userData.map((user, index) => {
            return (

                <div key={user.id} className="card">

                    <img src={user.pictureLink} alt="Avatar" />
                    <div className="container">
                        <h4><b>{user.name}</b></h4>
                        <p>{user.Country}</p>
                    </div>

                </div>

            );
        })}

    </div>);
}

export default GalleryList;