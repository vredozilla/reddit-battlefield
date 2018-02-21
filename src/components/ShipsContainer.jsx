import * as React from "react";
import { connect } from 'react-redux';
import Ship from './Ship';

class ShipsContainer extends React.Component{
    render(){

        const children = this.props.ships.map((item)=>{
                return <Ship
                        key={item.name}
                        name={item.name}
                        src={item.src}
                    />
            })

        return <div className="ship-container">
                {children}
            </div>
    }
}

const mapStateToProps = state =>{
    return {
        ships: state.ships
    }
}

export default connect(mapStateToProps)(ShipsContainer);