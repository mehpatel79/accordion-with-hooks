import React, { useState } from "react";
import './flex-accordion.css';

const Panel = ({panelData, showPanel, activePanel}) =>{
    
    return(<>    
            {panelData.map((data, index) => {
                return (<>                
                {console.log(index)}
                        <div className="panel_display" key={index}>
                            <div className="flex-accordion">
                                <h3 className="h3_display">{data.title}</h3>
                                <button className="accordion-button" onClick={()=>{showPanel(index)}}>{(activePanel===index)?"-":"+"}</button>
                            </div>
                            {(activePanel===index)?<p>{data.content}</p>:null}
                        </div>
                        </>);     
                }
            )}
        </>);
    }
export default Panel;