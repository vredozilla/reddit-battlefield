import * as React from "react";
import {icons} from "../utils";

/*props
    cells: int [] //where 0 - closed, 1 - missed, 2 - hit
    onCellClick: ()=>{}
*/

const getImgSrc = (value) =>{
        switch(value){
            case 0:
                return icons.empty;
            case 1:
                return icons.miss;
                break;
            case 2:
                return icons.hit;
                break;
            default:
                break;
        }
    };

const Battlefield = ({cells, onCellClick}) =>{
        const children = cells.map((value, index)=>{
            return <div key={index}
                    onClick = {() => onCellClick(index)}>
                        <img 
                            src={getImgSrc(value)} 
                            alt=""
                            className="cell"
                        />
                    </div>
        });

        return <div className="battlefield-container">
            <div className="battlefield">
                    {children}
                </div>
        </div>
    }

export default Battlefield;