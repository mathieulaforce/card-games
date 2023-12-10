import GameSessionInfiniteScroll from './gameSessionInfiniteScroll';

export default async function BrowserList() {
  console.log("getting games")
  
  return (
<div>
      games:
      <GameSessionInfiniteScroll />
    </div>
    
  );
}
