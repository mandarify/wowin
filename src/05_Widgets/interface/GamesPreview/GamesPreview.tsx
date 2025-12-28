/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: GamesPreview

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";
import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { useLocation } from "react-router-dom";

// ########## ТИПЫ
// import type IGamesPreview from "./GamesPreview.types";
import type { TGamesData } from "@shared/types/data.types";

// ########## СТИЛИ
import "./GamesPreview.styles.css";

// ########## КОМПОНЕНТЫ
import { BtnBasic } from "@shared/ui";
import PreviewCase from "./Previews/PreviewCase/PreviewCase";
import { GameIcons } from "@shared/consts/data.consts";

// ########## МОДУЛИ
import { sortCases } from "@shared/funcs/sort";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

// FETCH
const getGamesData = async (): Promise<TGamesData | null> => {
   try {
      const res = await fetch('/wowin/test/data/games.json', { method: "GET" });
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      const data = await res.json();
      if (!data || Object.keys(data).length === 0) throw new Error('Empty.');
      return data as Promise<TGamesData>;
   } catch (error) {
      console.log(error);
      return null;
   }
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

// DATA
const getTopGames = (data: TGamesData) => {
   return {
      categories: data.categories,
      top: data.top,
      case: !data.case ? undefined : { games: data.case.games.filter(game => game.isTop !== null) },
      // duel: !data.duel ? undefined : { games: data.duel.games.filter(game => game.isTop !== null) },
      // pvp: !data.pvp ? undefined : { games: data.pvp.games.filter(game => game.isTop !== null) },
      // solo: !data.solo ? undefined : { games: data.solo.games.filter(game => game.isTop !== null) },
   } as TGamesData;
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const GamesPreview = (): JSX.Element => {

   const location = useLocation();
   const trackRef = useRef<HTMLDivElement>(null);

   const [category, setCategory] = useState(0);
   const [data, setData] = useState<TGamesData | null>(null);

   const tops = useMemo(() => {
      if (!data) return null;
      return getTopGames(data);
   }, [data]);

   /* Загрузка данных. */
   useEffect(() => {

      const load = async () => {
         const res = await getGamesData();

         if (res) {
            const timeoutId = setTimeout(() => {
               setData(res);
               const type = location.hash.replace('#', '');
               const ctg = res.categories.find(c => c.type === type);
               if (ctg) setCategory(ctg.id);
               clearTimeout(timeoutId);
            }, 200);
         }

      };

      load();

      return () => { };
   }, [location]);

   /* Горизонтальный скролл. */
   useEffect(() => {
      const track = trackRef.current;
      if (!track || !data) return;

      const horizontalScroll = (e: WheelEvent) => {
         if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            track.scrollLeft += e.deltaY;
         }
      };

      track.addEventListener("wheel", horizontalScroll, { passive: false });
      return () => track.removeEventListener("wheel", horizontalScroll);
   }, [data]);

   /* Сменить категорию. */
   const changeCategory = useCallback((id: number) => {
      setCategory(id);
      window.history.replaceState(null, '', `#${data!.categories.find(c => c.id === id)!.type}`);
   }, [data]);

   return (
      <div className="games-preview">

         <div className="games-preview-categories">
            <div ref={trackRef} className={`games-preview-categories-track ${!data ? '_empty-shimmer' : ''}`.trim()}>
               {data && data.categories.map((ctg) =>
                  <BtnBasic key={ctg.type} id={ctg.id} title={ctg.title} isActive={ctg.id === category} icon={GameIcons[ctg.type]} action={changeCategory} />
               )}
            </div>
         </div>

         <div className={`games-preview-content ${!data ? 'games-preview-content_empty' : ''}`.trim()}>

            {data &&
               <div className="games-preview-list">

                  {data.categories[category].type === "top" && tops &&
                     <>
                        {tops.case && tops.case.games.map(game => <PreviewCase key={`top-${game.id}`} game={game} order={game.isTop!} />)}
                     </>
                  }

                  {data.categories[category].type === "case" && <>{data.case && sortCases(data.case.games).map(game => <PreviewCase key={`case-${game.id}`} game={game} />)}</>}
                  {data.categories[category].type === "duel" && <div className="game-item games-duel">DUEL</div>}
                  {data.categories[category].type === "pvp" && <div className="game-item games-pvp">PvP</div>}
                  {data.categories[category].type === "solo" && <div className="game-item games-solo">SOLO</div>}

               </div>
            }

            {!data &&
               <>
                  <div className="games-preview-content-placeholder _empty-shimmer" />
                  <div className="games-preview-content-placeholder _empty-shimmer" />
               </>
            }

         </div>

      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default GamesPreview;
