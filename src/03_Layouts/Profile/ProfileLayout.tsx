/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: ProfileLayout

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";
import { useMemo } from "react";

// ########## ТИПЫ

// ########## СТИЛИ
import "./ProfileLayout.css";

// ########## КОМПОНЕНТЫ
import { Menu } from "@widgets/interface";
import { Outlet } from "react-router-dom";
import { ImgBasic } from "@shared/ui";
import { NavLink } from "react-router-dom";

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const ProfileLayout = (): JSX.Element => {

   const user = useMemo(() => Telegram?.WebApp?.initDataUnsafe?.user, []);

   return (
      <>

         <div className="app">
            <div className="app-container">
               <main className="main">

                  <div className="content-profilepage">
                     <div className="page-profile">

                        <div className="profile-top">
                           {user &&
                              <>
                                 <div className="profile-avatar">
                                    <div className="profile-avatar-container">
                                       <ImgBasic src={`${user.photo_url ?? 'test/imges/avatar.jpg'}`} alt="Avatar." extraClass="profile-img" />
                                    </div>
                                 </div>

                                 <div className="profile-data">
                                    <div className="profile-name _unselect">{`${user?.first_name} ${user?.last_name ?? ''}`.trim()}</div>
                                    {user.username && <a href={`https://t.me/${user.username}`} className="profile-username" target="_blank">{`@${user.username}`}</a>}
                                 </div>
                              </>
                           }
                        </div>

                        <div className="profile-bottom">

                           <div className="profile-tabs">
                              <div className="profile-tabs-content">
                                 <NavLink end to="/profile" className={({ isActive }) => `profile-tab ${isActive ? 'profile-tab-active' : ''}`}>Профиль</NavLink>
                                 <NavLink end to="/profile/wallet" className={({ isActive }) => `profile-tab ${isActive ? 'profile-tab-active' : ''}`}>Кошелек</NavLink>
                                 <NavLink end to="/profile/friends" className={({ isActive }) => `profile-tab ${isActive ? 'profile-tab-active' : ''}`}>Друзья</NavLink>
                                 <NavLink end to="/profile/tasks" className={({ isActive }) => `profile-tab ${isActive ? 'profile-tab-active' : ''}`}>Задания</NavLink>
                              </div>
                           </div>

                           <div className="profile-content">
                              <Outlet />
                           </div>

                        </div>

                     </div>
                  </div>

               </main>
            </div>
         </div>

         <Menu />

      </>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default ProfileLayout;
