import * as React from "react";
import ShipsContainer from './ShipsContainer';
import shipData from "../utils"

export default class ApplicationShell extends React.Component {
    render(){
        return <div>
                <ShipsContainer
                    ships = {shipData}
                />
            </div>
    }
}