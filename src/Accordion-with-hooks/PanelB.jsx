import React from "react";


const PanelB = ({showPanel, activePanel, togglebtn, panelId}) =>{

    return(<div style={{border: "1px solid black", padding:"5px", margin:"0px 10px"}}>
            <div className="flex-accordion">
            <h3 style={{color: "blue"}}>Vadodara Geography</h3>
            <button className="accordion-button" onClick={()=>showPanel(2)}>{(togglebtn)&&(panelId===2)?"-":"+"}</button>
             </div>
             {(activePanel === 2) && (togglebtn) &&
            
                <p>
                Vadodara is located at 22.30°N 73.19°E in western India at an elevation of 128 ft (39 m). It is the 10th-largest city in India with an area of 400 km2 (150 sq mi) and a population of 3.5 million, according to the 2010–11 census. The city sits on the banks of the Vishwamitri River, in central Gujarat. The Vishwamitri frequently dries up in the summer, leaving only a small stream of water. The city is located on the fertile plain between the Mahi and Narmada Rivers. According to the Bureau of Indian Standards, the cosmopolis falls under seismic zone-III, on a scale of I to V (in order of increasing proneness to earthquakes).            
                </p>
            }
            </div>

    );

};

export default PanelB;