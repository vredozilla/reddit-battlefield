import * as React from "react";
import {icons} from "../utils";

/*props
    positions: int [] //where 0 - closed, 1 - missed, 2 - hit
    handler: ()=>{}
*/

export default class Battlefield extends React.Component{
    getImgSrc = (value) =>{
            switch(value){
                case 0:
                    return icons.miss; //// need empty icon?
                case 1:
                    return icons.miss;
                    break;
                case 2:
                    return icons.hit;
                    break;
                default:
                    break;
            }
        }

    render(){
        const children = this.props.positions.map((value, index)=>{
                return <div key={index}
                        onClick = {() => this.props.handler(index)}>
                            <img 
                                src={this.getImgSrc(value)} 
                                alt=""
                                className="cell"
                            />
                        </div>
            });

        return <div className="battlefield">
                {children}
            </div>
    }
}