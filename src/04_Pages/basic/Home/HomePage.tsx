/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: HomePage

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

// ########## ТИПЫ
// import type IHomePage from "./HomePage.types";
import type { TSlideData } from "@shared/types/data.types";

// ########## СТИЛИ
import "./HomePage.styles.css";

// ########## КОМПОНЕНТЫ
import { WheelLive, WheelGifts, WheelFortuneMini, Slider, TitleMain } from "@shared/ui";
import { GamesPreview } from "@widgets/interface";

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


/* Sliders Data. */
const slidersData: TSlideData[] = [
   { id: 1, srcs: { low: 'test/actions/news-5-low.jpg', high: 'test/actions/news-5.jpg' }, title: 'Посылка.', link: '/game/case/package' },
   { id: 2, srcs: { low: 'test/actions/news-1-low.jpg', high: 'test/actions/news-1.jpg' }, title: 'Кейс Сияние.', link: '/game/case/glow' },
   { id: 3, srcs: { low: 'test/actions/news-2-low.jpg', high: 'test/actions/news-2.jpg' }, title: 'Кейс Льдина.', link: '/game/case/iceblock' },
   { id: 4, srcs: { low: 'test/actions/news-3-low.jpg', high: 'test/actions/news-3.jpg' }, title: 'Кейс Фортуна.', link: '/game/case/fortune' },
   { id: 5, srcs: { low: 'test/actions/news-4-low.jpg', high: 'test/actions/news-4.jpg' }, title: 'Кейс Стиль.', link: '/game/case/swag' }
];


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const HomePage = (): JSX.Element => {

   const navigate = useNavigate();

   const onSlideAction = useCallback((slide: TSlideData) => {
      navigate(slide.link);
   }, [navigate]);

   return (
      <div className="content-page">
         <div className="page-home">

            <WheelLive />

            <div className="live-content">
               <WheelFortuneMini />
               <WheelGifts />
            </div>

            <Slider data={slidersData} onSlideClick={onSlideAction} />

            <TitleMain title="игры" icon="swords" />

            <GamesPreview />

         </div>
      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default HomePage;
