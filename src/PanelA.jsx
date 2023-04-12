import React from "react";

class PanelA extends React.Component {
    constructor(props) {
        super(props);    
    }
    

    render(){
    return(<div style={{border: "1px solid red", padding:"5px", margin:"1px 10px"}}>
            <h3>Vadodara Etymology</h3>
            <button onClick={()=>this.props.showPanel(1)}>{(this.props.togglebtn)&&(this.props.panelId===1)?"-":"+"}</button>
            {(this.props.activePanel === 1) && (this.props.togglebtn) && 
                <p>
                The city once was called Chandanavati after the rule of Chanda of the Dodiya Rajputs. The capital was also known as Virakshetra or Viravati (Land of Warriors). Later, it was known as Vadpatraka or Vadodará, and according to tradition, is a corrupt form of the Sanskrit word vatodar, meaning "in the belly of the banyan tree". It is, as of 2000, almost impossible to ascertain when the various changes in the name were made; early English travelers and merchants of the 18th century mention the town as Baroda,[8] and it is from this, that the name Baroda is derived; in 1974 (well after independence), the official name of the city was changed to Vadodara.
                </p> 
            }
            </div>

            );

    }
}

export default PanelA;