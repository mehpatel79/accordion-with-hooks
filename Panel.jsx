import React, { useState } from "react";
import './flex-accordion.css';

const arraypanel = [];
arraypanel[0] = [];
arraypanel[1] = ["panel1"];
arraypanel[2] = ["panel2"];
arraypanel[3] = ["panel3"];

const Panel = ({activePanel}) =>{
    return(
        <>
        {arraypanel[activePanel]}
        </>

    );
}
export default Panel;