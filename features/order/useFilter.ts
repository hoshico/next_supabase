
type Position ="外野手" | "一塁手";
type Player = {
  id: number;
  name: string;
  avg: string;
  hr: string;
  position: Position;
  image: string;
}
export const uesFilter = () => {
  const filterPlayers = (players: Player[]) => {
    let filteredPlayers: {[key: string]: Player[]} = {
      outFielder: [],
      firstFielder: [],
      secondFielder: [],
    };
    for( const player of players) {
      switch(player.position) {
        case "外野手":
          filteredPlayers.outFielder.push(player);
          break;
        case "一塁手":
          filteredPlayers.firstFielder.push(player);
          break;
        default:
          const position: never = player.position;
          throw new Error(`${position}というpositionがありません`);
      }
    }
    return filteredPlayers;
  };
  return { filterPlayers }
};