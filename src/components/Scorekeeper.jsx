import PlayerCard from "./PlayerCard";
import { useState } from "react";

export default function ScoreKeeper({ numPlayers, target }) {
    const [winner, setWinner] = useState('');
    const [maxScore, setMaxScore] = useState(0);
    const [Players, setPlayers] = useState(Array.from({ length: numPlayers }, (_, index) => ({
        id: index + 1,
        playerName: `player ${index + 1}`,
        score: 0
    })));

    const handleClick = () => {
        setPlayers(Players => Players.map(p => {
            return { ...p, score: 0 };
        }));
    }

    const handleIncrement = (id) => {
        // takes the id of a player and then updates the score of that player
        setPlayers(Players => Players.map(player => {

            setMaxScore(maxScore => {
                const maximumScore = Math.max(...Players.map(player => {
                    return id === player.id ? player.score + 1 : player.score;
                }))
    
                if(maximumScore === target) {
                    setWinner(winner => id);
                }
    
                return maximumScore;
            })

            // find the player who has id === player.id
            return id === player.id ? {...player, score : player.score + 1} : player
        }));

        
    }
    
    const style = {
        backgroundColor : "teal",
        color: "white",
        fontSize: "3rem",
        padding: "5px 50px"
    }

    return (winner !== '' ? <h1>Player {winner} won!!!!!!!!!!!!!!!!!</h1> :
        <div className="ScoreKeeper">
            {Players.map(player => <PlayerCard key = {player.id} {...player} onClick = {handleIncrement}>{player.playerName}</PlayerCard>)}
            <div className="ScoreKeeper__btn">
                <button type="button" className="ScoreKeeper__btn--reset" onClick={handleClick} style={style}>Reset</button>
            </div>
        </div>
    );
}
