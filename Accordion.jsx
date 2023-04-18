import React, { useState } from "react";
import Panel from "./Panel";
// import PanelA from './PanelA';
// import PanelB from './PanelB';
// import PanelC from './PanelC';

const Accordion = () => {
    const [activePanel, setActivePanel] = useState(0);
    
    const showPanel = (panel) => {
        if(activePanel !== panel){
            setActivePanel(panel);
            }
        else {
            setActivePanel(0);
            };

    };
    
    


    return (<>
            <h2 style={{color:"purple"}}><center>City : <i><b>"VADODARA"</b></i> </center></h2>
            
            <div style={{border: "1px solid black", padding:"5px", margin:"0px 10px"}}>
            <div className="flex-accordion">
            <h3 style={{color: "red"}}>Vadodara Etymology</h3>
            <button className="accordion-button" onClick={()=>showPanel(1)}>{(activePanel===1)?"-":"+"}</button>
            </div>
            <Panel activePanel={activePanel} />
            </div>
            <div style={{border: "1px solid black", padding:"5px", margin:"0px 10px"}}>
            <div className="flex-accordion">
            <h3 style={{color: "blue"}}>Vadodara Geography</h3>
            <button className="accordion-button" onClick={()=>showPanel(2)}>{(activePanel===2)?"-":"+"}</button>
             </div>
             <Panel activePanel={activePanel} />
             </div>
             <div style={{border: "1px solid black", padding:"5px", margin:"0px 10px"}}>
            <div className="flex-accordion">
            <h3 style={{color: "green"}}>Vadodara Climate</h3>
            <button className="accordion-button" onClick={()=>showPanel(3)}>{(activePanel===3)?"-":"+"}</button>
             </div>
             <Panel activePanel={activePanel} />

             </div>
           
            

             </>);
          

    };


export default Accordion;