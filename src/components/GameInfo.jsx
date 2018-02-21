import * as React from "react";
import ScoreContainer from "./ScoreContainer";
import ShipsContainer from "./ShipsContainer";

export default class GameInfo extends React.Component {
    render(){
        return <div className="gameInfo">
            <ScoreContainer/>
            <ShipsContainer/>
        </div>
    }
}