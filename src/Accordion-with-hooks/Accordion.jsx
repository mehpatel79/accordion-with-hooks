import React, { useState } from "react";
import PanelA from './PanelA';
import PanelB from './PanelB';
import PanelC from './PanelC';

const Accordion = () => {
    const [activePanel, setActivePanel] = useState(0);
    const [togglebtn, setTogglebtn] = useState(false);
    const [panelId, setPanelId] = useState(1);

    const showPanel = (panel) => {
        if(panelId === panel){
            setActivePanel(panel);
            setTogglebtn(!togglebtn);
            }
        else {
            setActivePanel(panel);
            setTogglebtn(true);
            setPanelId(panel);
            };

    };
    
    


    return (<>
            <h2 style={{color:"purple"}}><center>City : <i><b>"VADODARA"</b></i> </center></h2>
            <PanelA showPanel={showPanel} activePanel={activePanel} togglebtn={togglebtn} panelId={panelId}/>
            <PanelB showPanel={showPanel} activePanel={activePanel} togglebtn={togglebtn} panelId={panelId}/>
            <PanelC showPanel={showPanel} activePanel={activePanel} togglebtn={togglebtn} panelId={panelId}/>
             </>);
          

    };


export default Accordion;