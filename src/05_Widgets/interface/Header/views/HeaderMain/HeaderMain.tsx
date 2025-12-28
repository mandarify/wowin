/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: HeaderMain

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

// ########## ТИПЫ
// import type IHeaderMain from "./HeaderMain.types";

// ########## СТИЛИ
import "./HeaderMain.styles.css";

// ########## КОМПОНЕНТЫ
import { AvatarMini, BtnIcon, Resource } from "@shared/ui";

// ########## МОДУЛИ

// ########## РЕСУРСЫ
import wowcoin from "@images/wincoin.svg";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const HeaderMain = (): JSX.Element => {

   const navigate = useNavigate();

   const goToAddResource = useCallback(() => {
      navigate('/profile/wallet');
   }, [navigate]);

   return (
      <div className="header-content header-main">

         <div className="header__left">
            <AvatarMini path="/profile" src="test/imges/avatar.jpg"></AvatarMini>
         </div>

         <div className="header__center">
            <BtnIcon path="/mail" isNew={true} size={30}><span className="svg-icon svg-icon-20 svg-model-notification" /></BtnIcon>
            <BtnIcon path="/settings" size={30}><span className="svg-icon svg-icon-20 svg-model-settings" /></BtnIcon>
         </div>

         <div className="header__right">
            <Resource value={1235} src={wowcoin} action={goToAddResource} />
         </div>

      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default HeaderMain;
