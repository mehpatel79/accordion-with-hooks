import React, { useState } from "react";
import './flex-accordion.css';

const arraypanel = [];
arraypanel[0] = [];
arraypanel[1] = ["The city once was called"];
arraypanel[2] = ["Vadodara is located at 22.30°N 73.19°E "];
arraypanel[3] = ["Vadodara features a borderline tropical."];

const Panel = ({activePanel}) =>{
    return(
        <>
        {arraypanel[activePanel]}
        </>

    );
}
export default Panel;