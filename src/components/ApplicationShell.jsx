import * as React from "react";
import GameInfo from "./GameInfo";
import Battlefield from './Battlefield';

export default class ApplicationShell extends React.Component {
    render(){        
        return <div className="appshell">
                <GameInfo/>
                <Battlefield/>
            </div>
    }
}