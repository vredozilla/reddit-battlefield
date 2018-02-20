import * as React from "react";
import {icons} from "../utils";

/* props
    health: []
    src: string
 */

export default class Ship extends React.Component{
    render(){
        const img = <div className="ship-icon">
                    <img src={this.props.src} alt=""/>
                </div>
        
        const health = <div className="health">
                {
                    this.props.health.map((item)=>{
                        return <img src={item > -1 ? icons.hitSmall : icons.missSmall} alt=""/>
                    })
                }
            </div>

        let children = [img, health];

        return <div className="ship">
                {children}
            </div>
    }
}