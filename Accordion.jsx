import React, { useState } from "react";
import Panel from "./Panel";

const Accordion = () => {
    const [activePanel, setActivePanel] = useState(0);
    const [panelData, setPanelData] = useState([
        {id:1, value:"panel1"},
        {id:2, value:"panel2"},
        {id:3, value:"panel3"}
    ]);

    
    
    const showPanel = (panel) => {
        if(activePanel !== panel){
            setActivePanel(panel);
            }
        else {
            setActivePanel(0);
            }

    }
    
    


    return (<>
            <h2 style={{color:"purple"}}><center>City : <i><b>"VADODARA"</b></i> </center></h2>

           
            {panelData.map((index) => {
                return <p key={index}>{index.value}</p>
            })

            }
            {/*<Panel showPanel={showPanel}/>*/}
             </>);
          

    };


export default Accordion;