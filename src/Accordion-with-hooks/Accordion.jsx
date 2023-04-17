import React, { useState } from "react";
import PanelA from './PanelA';
import PanelB from './PanelB';
import PanelC from './PanelC';

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
            <PanelA showPanel={showPanel} activePanel={activePanel} />
            <PanelB showPanel={showPanel} activePanel={activePanel} />
            <PanelC showPanel={showPanel} activePanel={activePanel} />
             </>);
          

    };


export default Accordion;