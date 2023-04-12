import React from "react";

class PanelC extends React.Component {
    constructor(props) {
        super(props);    
    }
    

    render(){
    return(<div style={{border: "1px solid green", padding:"5px", margin:"1px 10px"}}>
            <h3>Vadodara Climate</h3>
            <button onClick={()=>this.props.showPanel(3)}>{(this.props.togglebtn)&&(this.props.panelId===3)?"-":"+"}</button>
             {(this.props.activePanel === 3) &&  (this.props.togglebtn) &&
            
                <p> Vadodara features a borderline tropical savanna climate that despite the roughly 850 mm or 33 in of rain that the city receives annually is due to the area's high potential evapotranspiration very close to being classified as a hot semi-arid climate (BSh). There are three main seasons: summer, monsoon and winter. Aside from the monsoon season, the climate is dry. The weather is hot during March to July, when the average maximum is 39 °C or 102.2 °F, and the average minimum is 24 °C or 75.2 °F. From November to February, the average maximum temperature is 30 °C or 86 °F, the average minimum is 15 °C or 59 °F, and the climate is extremely dry. Cold northerly winds are responsible for mildly chilly days in January. The southwest monsoon brings a humid climate from mid-June to mid-September. The average rainfall is 85 cm (33 in), but infrequent, torrential rains cause the river to flood[10] like the 2005 Gujarat flood or the 2008 Indian floods, which were catastrophic.
                    The highest recorded temperature was 46.7 °C (116.1 °F) on 11 May 1960 crossed with 48.0 °C (118.4 °F) on 19 May 2016, while the lowest recorded temperature was −1.1 °C (30.0 °F) on 15 January 1935.    
                </p>
            }
            </div>

    );

    }
}

export default PanelC;