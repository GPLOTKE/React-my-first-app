import Player from './Player';

function PlayerList({playerData}) {
    console.log(playerData)
    return (
        playerData.map(player => {
            return ( 
                <Player 
                    key = { player.id }
                    player = {player}
                />
            )
        })
    )
}

export default PlayerList