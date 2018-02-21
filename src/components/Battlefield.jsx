import * as React from "react";
import { connect } from 'react-redux';
import clickCell from "../actions/actions";
import {icons} from "../utils";

const getImgSrc = (value) =>{
        switch(value){
            case 0:
                return icons.empty;
            case 1:
                return icons.miss;
            case 2:
                return icons.hit;
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

const getCells = (clickedCells, occupiedCells) => {
        return Array.apply(null, {length: 100}).map((value, index) => {
                let cellValue = 0;
                if (clickedCells.includes(index)){
                    cellValue = occupiedCells.includes(index) ? 2 : 1;
                }
                return cellValue;
            });
    }

const mapStateToProps = state =>{
    return {
        cells: getCells(state.clickedCells, state.occupiedCells),
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onCellClick: id => {
        dispatch(clickCell(id))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Battlefield);