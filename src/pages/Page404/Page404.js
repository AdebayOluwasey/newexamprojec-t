import React from "react";
import './Page404.css';
import {Helmet} from "react-helmet-async";
const Page404 = () => {
    return ( <>
        <Helmet>
        <title>Page404</title>
        <meta name="description" content="404 error for Delish Models"/>
        <link rel="canonical" href="/page404" />
        </Helmet>
        <div className="gif-background-container">
          <div><h1>Yo! You are not going to be finding any models here...</h1></div>  
<div className="gif-background">

</div>
</div>
</>
     );
}
 
export default Page404;