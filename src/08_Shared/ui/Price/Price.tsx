/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: Price

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ
import type IPrice from "./Price.types";

// ########## СТИЛИ
import "./Price.styles.css";

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import ImgBasic from "../ImgBasic/ImgBasic";
import TextGame from "../TextGame/TextGame";

// ########## РЕСУРСЫ
import wowcoin from "@assets/02_images/wincoin.svg";
import casecoin from "@assets/02_images/casecoin.svg";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const Price = ({ value, size, justify, resource, strike, animation, extraClass }: IPrice): JSX.Element => {
   return (
      <div className={`price price-size-${size} ${animation ? 'ani_ping' : ''} ${strike ? 'price-strike' : ''} ${extraClass ?? ""}`.trim()}>
         <TextGame type="block" content={value.toString()} extraClass={`price-value ${justify === "start" ? 'price-order-end' : 'price-order-start'}`} />
         <div className={`price-coin price-order-${justify}`}>
            {(!resource || resource === "coin") && <ImgBasic src={wowcoin} alt="WOWCOIN" extraClass="price-coin-img" />}
            {(resource === "case") && <ImgBasic src={casecoin} alt="CASECOIN" extraClass="price-coin-img" />}
         </div>
      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default Price;
