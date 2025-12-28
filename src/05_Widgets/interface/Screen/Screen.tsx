/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: Screen

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";
import { useState, useRef, useEffect } from "react";

// ########## ТИПЫ
import type IScreen from "./Screen.types";

// ########## СТИЛИ
import "./Screen.styles.css";

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import useVibrate from "@shared/hooks/useVibrate";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const Screen = ({ closeAction, children }: IScreen): JSX.Element => {

   const vibrate = useVibrate();

   const [isClose, setIsClose] = useState(false);
   const backdropRef = useRef<HTMLDivElement>(null);

   useEffect(() => {

      document.body.classList.add('no-scroll');

      const actionClick = (e: PointerEvent) => {

         const target = e.target as HTMLElement;

         if (!isClose && target === backdropRef.current) {
            vibrate.apply("soft");
            setIsClose(true);
            closeAction();
         }
      }

      if (backdropRef.current) backdropRef.current.addEventListener('click', actionClick);

      return () => {
         if (backdropRef.current) backdropRef.current.removeEventListener('click', actionClick);
         document.body.classList.remove('no-scroll');
         backdropRef.current = null;
      }

   }, [isClose, closeAction, vibrate]);

   return (
      <div className="screen">

         <div className="screen-overflow _unuse">
            <div className="screen-container _unuse">
               <div className="screen-content _unuse">

                  {children}

               </div>
            </div>
         </div>

         <div ref={backdropRef} className="screen-backdrop" />

      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default Screen;
