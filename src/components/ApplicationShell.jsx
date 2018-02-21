import * as React from "react";
import ShipsContainer from './ShipsContainer';
import Battlefield from './Battlefield';
import getInitialData, {getAllPositions} from "../utils"

export default class ApplicationShell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                clickedCells: []
            };
    }

    clickedCells = [];
    clickHandler = (value) =>{
            const clickedCells = JSON.parse(JSON.stringify(this.state.clickedCells));
            if(!clickedCells.includes(value))
            {
                clickedCells.push(value);
                this.setState({
                        clickedCells: clickedCells
                    });
            }
        }
    getField = (value) => {
            return Array.apply(null, {length: 100}).map((value, index) => {
                    let cellValue = 0;
                    if (this.state.clickedCells.includes(index)){
                        cellValue = getAllPositions().includes(index) ? 2 : 1;
                    }

                    return cellValue;
                });
        }
    render(){
        
        return <div>
                <Battlefield
                    positions={this.getField()}
                    handler={this.clickHandler}
                />
            </div>
    }
}