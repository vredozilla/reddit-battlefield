import * as React from "react";
import { connect } from 'react-redux';

class ScoreContainer extends React.Component{
    render(){
        return <div className="score-container">
          {
            this.props.playerData.map((player, index)=>
              {
                return <div className={"player"} key={index}>
                          <div className="score">
                            {player.score}
                          </div>
                          <div className="name">
                            {player.name}
                          </div>
                      </div>
              })
          }
        </div>
    }
}

const formatScore = (score)=>{
    return score > 9 ? score : "0"+score;
  }

const mapStateToProps = (state) =>{
  return {
     playerData: [{
          name: state.players[0].name,
          score: formatScore(state.players[0].score)
        },
        {
          name: state.players[1].name,
          score: formatScore(state.players[1].score)
        }] 
  }
}

export default connect(mapStateToProps)(ScoreContainer);

