function Player(props) {
    const {firstName, lastName, hobbies, jerseyNumber} = props.player;
    const playerHobbies = hobbies.length
        ? hobbies.map((hobby, i) =>{
            return <li key={i}> {hobby} </li>
        })
        : <p>No hobbies listed</p>
        return (
            <div>
                <h3>{firstName} {lastName}</h3>
                <p>Jersey Number: {jerseyNumber}</p>
                <ul>{playerHobbies}</ul>
            </div>
        )
}

export default Player