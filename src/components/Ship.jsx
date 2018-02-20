import * as React from "react";
import {icons} from "../utils";

/* props
    health: []
    src: string
 */

export default class Ship extends React.Component{
    render(){
        const img = <div className="ship-icon" key="icon">
                    <img src={this.props.src} alt=""/>
                </div>
        
        const health = <div className="health" key="health">
                {
                    this.props.health.map((item, index)=>{
                        return <img 
                            key={index}
                            src={item > -1 ? icons.hitSmall : icons.missSmall} 
                            alt=""/>
                    })
                }
            </div>

        const children = [img, health];

        return <div className="ship">
                {children}
            </div>
    }
}