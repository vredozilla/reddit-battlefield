import * as React from "react";

export default class ScoreContainer extends React.Component{
    render(){
        return <div class="score-container">
          <div class="player1">
            <div class="score">
              00
            </div>
            <div class="name">
              player1
            </div>
          </div>
          <div class="player2">
            <div class="score">
              00
            </div>
            <div class="name">
              player2
            </div>
          </div>
        </div>        
    }
}