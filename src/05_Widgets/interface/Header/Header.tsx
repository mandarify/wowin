/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: Header

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

// ########## ТИПЫ
// import type IHeader from "./Header.types";

// ########## СТИЛИ
import "./Header.styles.css";

// ########## КОМПОНЕНТЫ
import { AvatarMini, Resource, BtnIcon } from "@shared/ui";

// ########## МОДУЛИ

// ########## РЕСУРСЫ
import wowcoin from "@images/wincoin.svg";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const Header = (): JSX.Element => {

   const navigate = useNavigate();

   const goToAddResource = useCallback(() => {
      navigate('/profile/wallet');
   }, [navigate]);

   return (
      <header id="header">

         <div className="header-backdrop _unuse"></div>

         <div className="header-container">
            <div className="header-content">

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
         </div>

      </header>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default Header;
