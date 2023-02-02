
type Position ="外野手" | "一塁手" | "二塁手" | "三塁手" | "遊撃手" | "捕手" | "指名打者";
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
      thirdFielder: [],
      shortFielder: [],
      catcherFielder: [],
      signatureFileder: [],
    };
    for( const player of players) {
      switch(player.position) {
        case "外野手":
          filteredPlayers.outFielder.push(player);
          break;
        case "一塁手":
          filteredPlayers.firstFielder.push(player);
          break;
        case "二塁手":
          filteredPlayers.secondFielder.push(player);
          break;
        case "三塁手":
          filteredPlayers.thirdFielder.push(player);
          break;
        case "遊撃手":
          filteredPlayers.shortFielder.push(player);
          break;
        case "捕手":
          filteredPlayers.catcherFielder.push(player);
          break;
        case "指名打者":
          filteredPlayers.signatureFileder.push(player);
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