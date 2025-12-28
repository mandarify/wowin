/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: CardCase

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ
import type ICardCase from "./CardCase.types";
import type { GameCaseItemRarity } from "@shared/types/games/case.types";

// ########## СТИЛИ
import "./CardCase.styles.css";

// ########## КОМПОНЕНТЫ
import ImgProgress from "../ImgProgress/ImgProgress";
import TextGame from "../TextGame/TextGame";
import CountCards from "../CountCards/CountCards";
import CardCaseItem from "../CardCaseItem/CardCaseItem";

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const CardCase = ({ game }: ICardCase): JSX.Element => {
   return (
      <div className="card-case">

         <div className="card-case-top">

            <div className="card-case-picture card-case-spins">
               <ImgProgress srcs={game.srcs} alt={game.title} blur={false} extraClass="card-case-box ani_floating" />
            </div>

            <div className="card-case-data">
               <TextGame type="block" content={game.desc} extraClass="card-case-desc" />
            </div>

            <div className="cards-stats">
               {Object.entries(game.stats).map(([rarity, value]) => <CountCards key={`rarity-${rarity}`} rarity={rarity as GameCaseItemRarity} count={value} />)}
            </div>

         </div>

         <div className="card-case-bottom">
            <div className="card-case-list">
               {game.items.map((item) => <CardCaseItem key={`case-item-${item.id}`} data={item} />)}
            </div>
         </div>

      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default CardCase;
