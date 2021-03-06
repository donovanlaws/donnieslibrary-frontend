import React from "react";
import { FaStar, FaStarHalf, FaHeart } from "react-icons/fa";
import img_loading from "../Images/loadingimg.png";
const hexValues = ['5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];


export default function GamesList({ games }) {
  return (
    <div className="game-list slideFromBottom">
      {games.length > 0 &&
        games.map((game) => {
          const stars = Math.floor(game.rating);
          const halfStar = String(game.rating).endsWith(".5");
          const legendary = (stars === 5 && halfStar);
          let hex = "";
          for (let i = 0; i < 6; i++) { hex += hexValues[Math.floor(Math.random() * hexValues.length)] };
          return (
            <div className="game-card" key={game.game_id} style={{border: `4px solid #${hex}`, backgroundImage: `url("${img_loading}")`, backgroundSize: "cover"}}>
              <img className="game-image" src={game.game_image} alt={game.game_title} />
              <div className="game-info">
                <h3 className="game-main game-title">
                  <a href={`https://www.google.com/search?q=${game.game_title.replace("+", "%2B").split(" ").join("+")}`} target="_blank" rel="noreferrer">{game.game_title}</a>
                </h3>
                <div className="game-extra">
                  <div className="game-release">{game.game_release}</div>
                  <div className="game-platform">{game.platform}</div>
                  <div className="game-mode">{game.multiplayer ? "Mutliplayer" : "Singleplayer"}</div>
                  { legendary
                    ? <div className="game-rating">{Array(stars).fill().map((_, i) => (<FaHeart color="#BD6AFF" key={i} />))}</div>
                    : <div className="game-rating">{Array(stars).fill().map((_, i) => (<FaStar color="gold" key={i} />))}{halfStar && <FaStarHalf color="gold"/>}</div>
                  }
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}