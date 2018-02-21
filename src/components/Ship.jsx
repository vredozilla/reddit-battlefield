import * as React from "react";
import { connect } from 'react-redux';
import {icons} from "../utils";

class Ship extends React.Component{
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

const getShipHealth = (shipName, state) =>{
    const clickedCells = state.clickedCells;
    let shipPositions = [];
    state.ships.map((ship)=>{
            if(ship.name === shipName){
                shipPositions = ship.positions;
            }
        })
    let hitCount = 0;
    shipPositions.map((value) => {
            if (clickedCells.includes(value)){
                hitCount++;
            }
        });

    return Array.apply(null, {length: shipPositions.length})
            .map((value, index) => {return index < hitCount ? 0 : -1});
}

const mapStateToProps = (state, ownProps) =>{
    return {
        health: getShipHealth(ownProps.name, state),
        src: ownProps.src
    }
}

export default connect(mapStateToProps)(Ship);