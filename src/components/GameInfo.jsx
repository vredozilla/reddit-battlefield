import * as React from "react";
import ScoreContainer from "./ScoreContainer";
import ShipsWrapper from "./ShipsContainerWrapper";

export default class GameInfo extends React.Component {
    render(){
        return <div class="gameInfo">
            <ScoreContainer/>
            <ShipsWrapper/>
        </div>
    }
}