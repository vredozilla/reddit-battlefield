import * as React from "react";
import ShipsContainer from './ShipsContainer';
import Battlefield from './Battlefield';
import getInitialData from "../utils"

export default class ApplicationShell extends React.Component {
    clickHandler = (value) =>{
            console.log(value);    
        }
    render(){
        
        return <div>
                <Battlefield
                    positions={Array.apply(null, {length: 100}).map(() => {return 0;})}
                    handler={this.clickHandler}
                />
            </div>
    }
}