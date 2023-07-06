

const ScoreBoard = ({score}) => {
    return (
        <div className="score-board">
            <h2>Your Score:</h2>
            <h2 className="blink">{score}</h2>
            <button className="custom-btn">Shuffle</button>

        </div>
    )
}

export default ScoreBoard;