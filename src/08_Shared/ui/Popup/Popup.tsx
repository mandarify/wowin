/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: Popup

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";
import { useCallback, useState } from "react";

// ########## ТИПЫ
import type IPopup from "./Popup.types";

// ########## СТИЛИ
import "./Popup.styles.css";

// ########## КОМПОНЕНТЫ
import BtnGame from "../BtnGame/BtnGame";
import TextGame from "../TextGame/TextGame";
import Input from "../Input";

// ########## МОДУЛИ
import useVibrate from "@shared/hooks/useVibrate";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const Popup = ({ title, closeAction, children, style, button }: IPopup): JSX.Element => {

   const vibrate = useVibrate();
   const [check, setCheck] = useState<boolean>(false);

   const toggleCheck = useCallback(() => {
      vibrate.apply("soft");
      setCheck(prev => !prev);
   }, [vibrate, setCheck]);

   const mainBtnOnClick = useCallback(() => {
      if (!button) return;
      vibrate.apply("soft");
      button.action(check);
   }, [button, vibrate, check]);

   return (
      <div className={`popup ${button ? (button.checkbox ? 'popup-padding-2' : 'popup-padding-1') : ''} _use`} data-popup={style ?? 'default'}>

         <div className="popup-content">

            <div className="popup-topic">
               <TextGame type="line" content={title} extraClass="popup-topic-content" />
            </div>

            {children}

            {button &&
               <div className="popup-bottom">
                  {button.checkbox &&
                     <div className="popup-checkbox" onClick={toggleCheck}>
                        <Input.Checkbox flag={check} />
                        <TextGame type="line" content={button.checkbox} extraClass="popup-checkbox-content" />
                     </div>
                  }
                  <div className="popup-btn _shimmer" onClick={mainBtnOnClick}>
                     <TextGame type="line" content={button.name} extraClass="popup-btn-content" />
                  </div>
               </div>
            }


         </div>

         <div className="popup-close">
            <BtnGame mode="close" size={28} action={closeAction} />
         </div>

      </div>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default Popup;
