import { createContext } from "react";
import React from "react";
import profilepic1 from "../images/profilepic1.jpg";
import profilepic2 from "../images/profilepic2.jpg";
export const theUsers = [
    {
    isAuthenticated: false,
    user: {
        username: "Shay",
        password: "12345",
        image: profilepic1

      },},
    {   
      isAuthenticated: false,
      user: {
      username: "Ifeoluwa",
      password: "2468",
      image: profilepic2
    }}
  ]
export const UserAuthContext = createContext()