import React, { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../context/UserAuthContext";



export const useGetUser = (type) => {
    // get currently logged in user from context
    const { value } = useContext(UserAuthContext);

    const [data, setData] = useState([]);
    useEffect(() => {
        const user = value
        if (type === "user") {
            setData(user)
        }
    }, [type])
    return data;
}