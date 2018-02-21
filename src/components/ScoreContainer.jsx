import * as React from "react";
import { connect } from 'react-redux';

class ScoreContainer extends React.Component{
    render(){
        return <div class="score-container">
          {
            this.props.playerData.map((player)=>{
              return <div class={"player"}>
                        <div class="score">
                          {player.score}
                        </div>
                        <div class="name">
                          {player.name}
                        </div>
                    </div>
            })
          }
        </div>
    }
}

const mapStateToProps = (state) =>{
  return {
     playerData: [{
          name: state.players[0].name,
          score: state.players[0].score > 9 ?  state.players[0].score : "0"+ state.players[0].score
        },
        {
          name: state.players[1].name,
          score: state.players[1].score > 9 ?  state.players[1].score : "0"+ state.players[1].score
        }] 
  }
}

export default connect(mapStateToProps)(ScoreContainer);

