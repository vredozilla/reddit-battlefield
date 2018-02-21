import * as React from "react";
import GameInfo from "./GameInfo";
import BattlefieldWrapper from './BattlefieldWrapper';

export default class ApplicationShell extends React.Component {
    render(){        
        return <div className="appshell">
                <GameInfo/>
                <BattlefieldWrapper/>
            </div>
    }
}