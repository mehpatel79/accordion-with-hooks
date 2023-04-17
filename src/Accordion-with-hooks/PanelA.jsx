import React from "react";
import './flex-accordion.css';

const PanelA = ({showPanel, activePanel}) =>{

    return(<div style={{border: "1px solid black", padding:"5px", margin:"0px 10px"}}>
            <div className="flex-accordion">
            <h3 style={{color: "red"}}>Vadodara Etymology</h3>
            <button className="accordion-button" onClick={()=>showPanel(1)}>{(activePanel===1)?"-":"+"}</button>
            </div>
            {(activePanel === 1) && 
                <p>
                The city once was called Chandanavati after the rule of Chanda of the Dodiya Rajputs. The capital was also known as Virakshetra or Viravati (Land of Warriors). Later, it was known as Vadpatraka or Vadodará, and according to tradition, is a corrupt form of the Sanskrit word vatodar, meaning "in the belly of the banyan tree". It is, as of 2000, almost impossible to ascertain when the various changes in the name were made; early English travelers and merchants of the 18th century mention the town as Baroda,[8] and it is from this, that the name Baroda is derived; in 1974 (well after independence), the official name of the city was changed to Vadodara.
                </p> 
            }
            </div>

            );

    };

export default PanelA;