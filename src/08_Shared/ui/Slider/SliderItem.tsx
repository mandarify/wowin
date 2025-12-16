/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: SliderItem

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ
import type { ISliderItem } from "./Slider.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ
import ImgProgress from "../ImgProgress/ImgProgress";

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const SliderItem = ({ slide, isActive, offset }: ISliderItem): JSX.Element => {
   return (
      <div className={`slide ${isActive ? 'slide-current' : ''}`} data-slide={slide.id} style={{ transform: `translateX(calc(${offset * 100}% - 5px))` }}>
         <div className="slide-content">
            <ImgProgress srcs={slide.srcs} alt={slide.title} />
         </div>
      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default SliderItem;
