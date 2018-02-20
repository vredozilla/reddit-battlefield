import * as React from "react";
import Ship from './Ship';

/* props
    ships: []
 */

export default class ShipsContainer extends React.Component{
    render(){

        const children = this.props.ships.map((item)=>{
                return <Ship
                        key={item.name}
                        src={item.src}
                        health={item.health}
                    />
            })

        return <div className="ship-container">
                {children}
            </div>
    }
}