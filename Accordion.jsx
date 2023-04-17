import React from "react";
import PanelA from './PanelA';
import PanelB from './PanelB';
import PanelC from './PanelC';

class Accordion extends React.Component {
    constructor(props) {
        super(props);    
         this.state = { 
            activePanel : 0,  
         }

         this.showPanel = this.showPanel.bind(this);
    
    }

showPanel(panel){
    if(this.state.activePanel !== panel)
        {this.setState({activePanel: panel});}    
    else 
        {
            this.setState({activePanel: 0})        
        };

    }
    
    


render(){
        return (<>
            <PanelA showPanel={this.showPanel} activePanel={this.state.activePanel} />
            <PanelB showPanel={this.showPanel} activePanel={this.state.activePanel} />
            <PanelC showPanel={this.showPanel} activePanel={this.state.activePanel} />
             </>)
          

    }
}

export default Accordion;