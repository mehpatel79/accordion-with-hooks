import React, { useState } from "react";
import './flex-accordion.css';

const Panel = ({panelTitle, panelContent, showPanel, activePanel, index}) =>{
    
    return(<>
            <div className="panel_display" >
            <div className="flex-accordion">
                <h3 className="h3_display">{panelTitle}</h3>
                <button className="accordion-button" onClick={()=>{showPanel(index)}}>{(activePanel===index)?"-":"+"}</button>
            </div>                
                        
            <p>{panelContent}</p>
            </div>    
        </>);
    }
export default Panel;