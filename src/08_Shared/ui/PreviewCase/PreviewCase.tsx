/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: PreviewCase

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";
import { useCallback } from "react";

// ########## ТИПЫ
import type IPreviewCase from "./PreviewCase.types";

// ########## СТИЛИ
import "./PreviewCase.styles.css";

// ########## КОМПОНЕНТЫ
import ImgProgress from "../ImgProgress/ImgProgress";
import TextGame from "../TextGame/TextGame";
import Price from "../Price/Price";

// ########## МОДУЛИ
import { NavLink } from "react-router-dom";
import useVibrate from "@shared/hooks/useVibrate";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const PreviewCase = ({ game, order }: IPreviewCase): JSX.Element => {

   const vibrate = useVibrate();

   const click = useCallback(() => {
      vibrate.apply("soft");
   }, [vibrate]);

   return (
      <NavLink end to={game.link} className={`games-preview-item ${order ? `games-preview-item-order-${order}` : ''}`.trim()} data-game-id={game.id} data-position={game.position} onClick={click}>

         <div className="games-preview-case spins" data-style={game.style}>

            <div className="game-preview-case-picture">
               <ImgProgress srcs={game.srcs} alt={game.title} blur={false} extraClass="games-preview-case-box ani_floating" />
            </div>

            <div className="game-preview-case-title">
               <div className="preview-case-text">
                  <TextGame type="line" content={game.title} extraClass="preview-case-topic" />
                  <TextGame type="block" content={game.desc} extraClass="preview-case-desc" />
               </div>
            </div>

            <div className="game-preview-case-price">
               {game.sale && <Price value={game.sale.oldPrice} justify="none" size={16} strike extraClass="game-preview-case-price_old" />}
               <Price value={game.price} justify="end" size={20} />
            </div>

         </div>

         {game.sale &&
            <div className="preview-sale _unuse" data-percent={`${game.sale.percent}%`}>
               <svg className="preview-sale-banner" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 -2.50738e-05L2.18557e-06 23L1.74848e-07 46L46 -2.3063e-05L23 -2.50738e-05Z" fill="#C20E2C" />
                  <path d="M21 -2.52486e-05L2.36042e-06 21L2.18557e-06 23L23 -2.50738e-05L21 -2.52486e-05Z" fill="#7B0014" />
                  <path d="M47 0.999977L48 -2.28882e-05L46 -2.3063e-05L1.74848e-07 46L0 48L1 47L47 0.999977Z" fill="#EB415D" />
                  <path d="M47 0.999977L48 0.999977L48 -2.28882e-05L47 0.999977Z" fill="#5B0000" />
                  <path d="M0 48L1 48L1 47L0 48Z" fill="#5B0000" />
                  <path d="M48 0.999977L47 0.999977L1 47L1 48L0 48L2 48L48 2L48 -2.28882e-05L48 0.999977Z" fill="black" fillOpacity="0.3" />
               </svg>
            </div>
         }

      </NavLink>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default PreviewCase;
