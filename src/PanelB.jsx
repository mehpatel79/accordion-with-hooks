import React from "react";

class PanelB extends React.Component {
    constructor(props) {
        super(props);    
    }
    

    render(){
    return(<div style={{border: "1px solid blue", padding:"5px", margin:"1px 10px"}}>
            <h3>Vadodara Geography</h3>
            <button onClick={()=>this.props.showPanel(2)}>{(this.props.togglebtn)&&(this.props.panelId===2)?"-":"+"}</button>
             {(this.props.activePanel === 2) && (this.props.togglebtn) &&
            
                <p>
                Vadodara is located at 22.30°N 73.19°E in western India at an elevation of 128 ft (39 m). It is the 10th-largest city in India with an area of 400 km2 (150 sq mi) and a population of 3.5 million, according to the 2010–11 census. The city sits on the banks of the Vishwamitri River, in central Gujarat. The Vishwamitri frequently dries up in the summer, leaving only a small stream of water. The city is located on the fertile plain between the Mahi and Narmada Rivers. According to the Bureau of Indian Standards, the cosmopolis falls under seismic zone-III, on a scale of I to V (in order of increasing proneness to earthquakes).            
                </p>
            }
            </div>

    );

    }
}

export default PanelB;