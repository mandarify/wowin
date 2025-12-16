/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: CountCards

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ
import type ICountCards from "./CountCards.types";

// ########## СТИЛИ
import "./CountCards.styles.css";

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const CountCards = ({ rarity, count }: ICountCards): JSX.Element => {
   return (
      <div className="count-cards" data-rarity={rarity}>
         <span className={`count-cards-icon svg-icon-color svg-icon-16 svg-model-${rarity}`} />
         <div className="count-cards-value">{count}</div>
      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default CountCards;
