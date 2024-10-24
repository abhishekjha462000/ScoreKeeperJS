import "./PlayerCard.css"
export default function PlayerCard({id, playerName, score, onClick}) {
    return (
        <div className="PlayerCard">
            <h1 className="PlayerCard__name">{playerName}</h1>
            <span className="PlayerCard__score">{score}</span>
            <button className="PlayerCard__btn" type="button" onClick = {() => onClick(id)}>+1</button>
        </div>
    );

}