/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
 
  КОМПОНЕНТ: Resource
 
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ
import type IResource from "./Resource.types";

// ########## СТИЛИ
import "./Resource.styles.css";

// ########## КОМПОНЕНТЫ
import { BtnGame, ImgBasic } from "@shared/ui";

// ########## МОДУЛИ
import useVibrate from "@shared/hooks/useVibrate";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const Resource = ({ value, src, action }: IResource): JSX.Element => {

   const vibrate = useVibrate();

   const clickBtnPlus = () => {
      vibrate.apply("soft");
      action();
   };

   return (
      <div className="resource" data-value={value} tabIndex={0}>

         <div className="resource-btn">
            <BtnGame mode="add" size={26} action={clickBtnPlus} />
         </div>

         <div className="resource-box">
            <div className="resource-value _unuse">{value}</div>
         </div>

         <div className="resource-icon">
            <ImgBasic src={src} alt="WOWCOIN" extraClass="resource-icon-content" />
         </div>

      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default Resource;
