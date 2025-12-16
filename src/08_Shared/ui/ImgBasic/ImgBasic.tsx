/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: ImgBasic

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";
import { useRef, useCallback } from "react";

// ########## ТИПЫ
import type IImgBasic from "./ImgBasic.types";

// ########## СТИЛИ
import "./ImgBasic.styles.css";

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ

// ########## РЕСУРСЫ
import iconImg from "@assets/04_errors/img.svg";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const ImgBasic = ({ src, alt, extraClass }: IImgBasic): JSX.Element => {

   const imgRef = useRef<HTMLImageElement>(null);

   const loadedError = useCallback(() => {
      const img = imgRef.current;
      if (!img) return;
      img.src = iconImg;
      img.classList.add("img-basic-error");
   }, []);

   return (
      <img ref={imgRef} key={src} className={`img-basic _unselect ${extraClass ?? ''}`.trim()} src={src} alt={alt} onError={loadedError} />
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(ImgBasic);
