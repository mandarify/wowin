/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: HomePage

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STORE
import { useSelector, useDispatch } from "react-redux";

import { getCurrentLanguage } from "@entities/Language/Language.selectors";
import { getSlidesState } from "@entities/Slides/Slides.selectors";

import { getSlides } from "@entities/Slides/Slides.thunks";

// ########## STANDART
import type { JSX } from "react";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ########## ТИПЫ
import type { AppDispatch } from "@store/store";
import type { ESlide } from "@entities/Slides/Slides.types";

// ########## СТИЛИ
import "./HomePage.styles.css";

// ########## КОМПОНЕНТЫ
import { WheelLive, WheelGifts, /* WheelFortuneMini,*/ Slider, TitleMain } from "@shared/ui";
import { GamesPreview } from "@widgets/games";

// ########## МОДУЛИ
import { getRemainingSeconds } from "@shared/funcs/time";
import { UPDATE_SLIDES_SEC } from "@shared/consts/settings.consts";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const HomePage = (): JSX.Element => {

   const dispatch = useDispatch<AppDispatch>();
   const navigate = useNavigate();

   const language = useSelector(getCurrentLanguage)!;
   const slides = useSelector(getSlidesState);

   /* Init data. */
   useEffect(() => {

      // Slides
      if (["idle", "error"].includes(slides.status) || (slides.status === "success" && getRemainingSeconds(slides.date!, UPDATE_SLIDES_SEC) <= 0)) {
         dispatch(getSlides());
      }

   }, [dispatch, slides]);

   /* Slide Click. */
   const onSlideAction = useCallback((slide: ESlide) => {
      navigate(slide.link);
   }, [navigate]);

   return (
      <div className="content-page">
         <div className="page-home">

            <WheelLive />
            <div className="live-content">
               {/* <WheelFortuneMini /> */}
               <WheelGifts />
            </div>
            <Slider data={slides.current} onSlideClick={onSlideAction} />
            <TitleMain title={language.labels["home_page_title"]} icon="swords" />
            <GamesPreview />

         </div>
      </div>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default HomePage;
