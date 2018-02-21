import { connect } from 'react-redux';
import ShipsContainer from "./ShipsContainer";

const mapStateToProps = state =>{
    return {
        ships: state.ships
    }
}

const ShipsWrapper = connect(mapStateToProps)(ShipsContainer);

export default ShipsWrapper;