import { connect } from 'react-redux';
import Battlefield from "./Battlefield";
import clickCell from "../actions/actions";

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
        handler: ""
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onCellClick: id => {
        dispatch(clickCell(id))
      }
    }
}

const BattlefieldWrapper = connect(mapStateToProps, mapDispatchToProps)(Battlefield);

export default BattlefieldWrapper;