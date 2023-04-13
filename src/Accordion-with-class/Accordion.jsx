import React from "react";
import PanelA from './PanelA';
import PanelB from './PanelB';
import PanelC from './PanelC';

class Accordion extends React.Component {
    constructor(props) {
        super(props);    
         this.state = { 
            activePanel : 0,
            togglebtn : false,
            panelId: 1
  
         }

         this.showPanel = this.showPanel.bind(this);
    
    }

showPanel(panel){
    if(this.state.panelId === panel)
        {this.setState({activePanel: panel, togglebtn: !this.state.togglebtn});}    
    else 
        {
            this.setState({activePanel: panel, togglebtn: true, panelId : panel})        
        };

    }
    
    


render(){
        return (<>
            <PanelA showPanel={this.showPanel} activePanel={this.state.activePanel} togglebtn={this.state.togglebtn} panelId={this.state.panelId}/>
            <PanelB showPanel={this.showPanel} activePanel={this.state.activePanel} togglebtn={this.state.togglebtn} panelId={this.state.panelId}/>
            <PanelC showPanel={this.showPanel} activePanel={this.state.activePanel} togglebtn={this.state.togglebtn} panelId={this.state.panelId}/>
             </>)
          

    }
}

export default Accordion;