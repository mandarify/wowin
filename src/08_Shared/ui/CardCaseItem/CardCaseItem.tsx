/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: CardCaseItem

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";
import { useEffect, useRef } from "react";

// ########## ТИПЫ
import type ICardCaseItem from "./CardCaseItem.types";

// ########## СТИЛИ
import "./CardCaseItem.styles.css";

// ########## КОМПОНЕНТЫ
import ImgBasic from "../ImgBasic/ImgBasic";
import TextGame from "../TextGame/TextGame";
import Price from "../Price/Price";

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const CardCaseItem = ({ data }: ICardCaseItem): JSX.Element => {

   const caseBoxRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const caseBox = caseBoxRef.current;
      if (!caseBox) return;

      const shimmer = () => {
         caseBox.style.setProperty("--shimmer-delay", `${data.id * 100}ms`);
         caseBox.classList.add("_shimmer");
      };

      shimmer();

   }, [data.id]);

   return (
      <div className="card-case-item" data-rarity={data.rarity}>
         <div ref={caseBoxRef} className="card-case-item-box">

            <ImgBasic src={data.content.src} alt={data.content.name} extraClass="card-case-item-img" />
            <TextGame type="block" content={data.content.name} extraClass="card-case-item-title" />

            <div className="card-case-item-percent">{data.permille / 1000}%</div>

            <div className="card-case-item-price">
               <Price value={data.price} size={10} justify="end" />
            </div>

         </div>
      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(CardCaseItem);
