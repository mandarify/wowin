/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: CasePage

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";
import { useState, useEffect, useCallback, useRef, useMemo } from "react";

// ########## ТИПЫ
import type ICasePage from "./CasePage.types";
import type { GameResources } from "@shared/types/games.types";
import type { GameCase } from "@shared/types/games/case.types";
import type { CaseLogicParams } from "@shared/modules/CaseLogic/CaseLogic.types";
import type { WheelHorizontalHandler } from "@widgets/games/WheelHorizontal/WheelHorizontal.types";

// ########## СТИЛИ
import "./CasePage.styles.css";

// ########## КОМПОНЕНТЫ
import Screen from "@widgets/interface/Screen/Screen";
import Loading from "@widgets/interface/Loading/Loading";
import { Popup, Stepper, BtnSimple, ImgProgress, ImgBasic, TextGame, CardCase, BtnPlay, BtnToggle, Price } from "@shared/ui";
import { WheelHorizontal } from "@widgets/games";

// ########## МОДУЛИ
import CaseLogic from "@shared/modules/CaseLogic/CaseLogic";
import useVibrate from "@shared/hooks/useVibrate";
import useBodyTheme from "@shared/hooks/useBodyTheme";
import { useFixedModal } from "@shared/contexts/FixedModalContext/FixedModal.hook";

// ########## РЕСУРСЫ
import wowcoin from "@assets/02_images/wincoin.svg";
import casecoin from "@assets/02_images/casecoin.svg";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

// FETCH GET CASE DATA
const getCaseData = async (name: string): Promise<GameCase | null> => {
   try {
      const res = await fetch(`/wowin/test/data/cases/${name}.json`, { method: "GET" });
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      const data = await res.json();
      if (!data || Object.keys(data).length === 0) throw new Error('Empty.');
      return data as Promise<GameCase>;
   } catch (error) {
      console.log(error);
      return null;
   }
};

// FETCH GET CASES STATS

export type TCasesStats = {
   divider: number,
   current: number,
   packs: number,
};

const getCasesStats = (): TCasesStats => {
   return {
      divider: 10,
      current: 5,
      packs: 1,
   };
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const caseLogicParams: CaseLogicParams = {
   sizes: {
      wrapper: 500,
      element: 100,
   },
   args: {
      timeAcc: 0.5,
      timeMax: 2.0,
      timeDec: 2.5,
      wayWrapperCount: 10,
   }
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const CasePage = ({ name }: ICasePage): JSX.Element => {

   const { open, close } = useFixedModal();
   const vibrate = useVibrate();

   const [init, setInit] = useState<boolean>(true);

   const [data, setData] = useState<GameCase | null>(null);
   const [stepper, setStepper] = useState<TCasesStats | null>(null);

   const btnResRef = useRef<any>(null);
   const [resource, setResource] = useState<GameResources>("coin");

   const logic = useMemo(() => data ? new CaseLogic(caseLogicParams, data.items) : null, [data]);
   const wheelRef = useRef<WheelHorizontalHandler | null>(null);

   useBodyTheme(data?.style);

   /* Загрузка данных. */
   useEffect(() => {
      const load = async () => {
         const resData = await getCaseData(name);
         const resCasesStats = getCasesStats();
         if (resData && resCasesStats) {
            setData(resData);
            setStepper(resCasesStats);
         }
      };
      load();
      return () => { };
   }, [name]);

   /* ========== ========== ========== ========== Методы */

   /* Передвинуть степер. */
   const nextStep = () => {
      if (init) setInit(false);
      setStepper(prev => ({
         ...prev!,
         current: prev!.current === prev!.divider ? 0 : prev!.current + 1,
      }));
   };

   /* Событие активации. */
   const onStart = () => {
      const wheel = wheelRef.current;
      if (!wheel || !logic) return;

      /* Start */
      const winElement = logic.getWinElement();
      console.log(winElement);
      wheel.play(winElement.id);
      if (resource === "coin") nextStep();
   };

   /* Сменить ресурсы. */
   const toggleResource = useCallback((id: number | string) => {
      const btnRes = btnResRef.current;
      if (resource === id || !btnRes) return;

      const newResource = resource === "coin" ? "case" : "coin";

      const res: boolean = btnResRef.current.setMain(newResource === "coin"
         ? <Price value={data!.price} size={28} justify="start" resource="coin" extraClass="btn-play-text" animation />
         : <Price value={1} size={28} justify="start" resource="case" extraClass="btn-play-text" animation />
      );

      if (res) setResource(newResource);

   }, [resource, setResource, data]);

   /* ========== ========== ========== ========== Модальные окна. */

   // Информая про бонус при открытии 10 кейсов.
   const modalInfoBonus = useCallback(() => {
      vibrate.apply("soft");
      open(<>
         <Screen closeAction={close}>
            <Popup title={`БОНУС`} style="info" closeAction={close} button={{ name: 'ОК', action: close }}>
               <div></div>
            </Popup>
         </Screen>
      </>);
   }, [vibrate, open, close]);

   // Правила игры.
   const modelCaseRules = useCallback(() => {
      vibrate.apply("soft");
      open(<>
         <Screen closeAction={close}>
            <Popup title={`правила игры`} style="info" closeAction={close} button={{ name: 'ОК', action: close }}>
               <div></div>
            </Popup>
         </Screen>
      </>);
   }, [vibrate, open, close]);

   // Содержимое кейса.
   const modalCaseContent = useCallback(() => {
      vibrate.apply("soft");
      open(<>
         <Screen closeAction={close}>
            <Popup title={`кейс ${data!.title}`} closeAction={close} button={{ name: 'ИГРАТЬ', action: close }}>
               <CardCase game={data!} />
            </Popup>
         </Screen>
      </>);
   }, [vibrate, data, open, close]);

   return (
      <>
         <Loading delay={400} status={(data && stepper) ? 'open' : 'close'} extraClass="case-loading" />

         {data && stepper &&

            <div className="content-game" data-style={data.style} data-theme={data.style}>

               <div className="page-case">

                  <div className="case-bonus" onClick={modalInfoBonus}>
                     <Stepper delay={init ? 400 : undefined} total={stepper.divider} current={stepper.current} isInit={init} />
                  </div>

                  <div className="case-top">

                     <div className="case-picture">
                        <ImgProgress srcs={data.srcs} alt={data.title} blur={false} extraClass="case-box ani_floating" />
                     </div>

                     <div className="case-data">
                        <TextGame type="line" content={data.title} extraClass="case-title" />
                     </div>

                     <div className="case-btn-list">
                        <BtnSimple title="Подарки" icon="palette" isBlock={false} action={modalCaseContent} />
                        <BtnSimple title="Правила" icon="info" isBlock={false} action={modelCaseRules} />
                     </div>

                  </div>

                  <div className="case-wheel">
                     <div className="case-wheel-container">

                        {logic && <WheelHorizontal ref={wheelRef} logic={logic} />}

                        <div className="case-center-line case-center-line-top" />
                        <div className="case-center-line case-center-line-bottom" />

                        <div className="case-wheel-border case-wheel-border-top">{data.style !== "default" && <WheelLineCrystal link={data.style} />}</div>
                        <div className="case-wheel-border case-wheel-border-bottom">{data.style !== "default" && <WheelLineCrystal link={data.style} />}</div>

                     </div>
                  </div>

                  <div className="case-bottom">

                     <div className="case-resourses">

                        <BtnToggle id="coin" isActive={resource === "coin"} action={toggleResource}>
                           <ImgBasic src={wowcoin} alt="WOWCOIN" extraClass="case-resourses-img" />
                        </BtnToggle>

                        <div></div>

                        <BtnToggle id="case" isActive={resource === "case"} action={toggleResource}>
                           <ImgBasic src={casecoin} alt="CASECOIN" extraClass="case-resourses-img" />
                        </BtnToggle>

                     </div>

                     <BtnPlay ref={btnResRef} delay={5000} action={onStart} states={{
                        main: <Price value={data.price} size={28} justify="start" resource="coin" extraClass="btn-play-text" animation />,
                        wait: <TextGame type="line" content="ВОЛШЕБСТВО" extraClass="btn-play-text" />
                     }} />

                  </div>

               </div>

            </div>
         }

      </>
   );
};

const WheelLineCrystal = ({ link }: { link: string }): JSX.Element => {
   return (
      <svg className="case-wheel-line-crystal _unuse" viewBox="0 0 530 30" xmlns="http://www.w3.org/2000/svg">
         <defs>
            <symbol id="crystal" viewBox="0 0 32 32">
               <image href={`/wowin/test/crystal/${link}.svg`} width="32" height="32" />
            </symbol>
         </defs>
         <use href="#crystal" x="0" y="0" width="30" height="30" />
         <use href="#crystal" x="91" y="5" width="20" height="20" />
         <use href="#crystal" x="172" y="5" width="20" height="20" />
         <use href="#crystal" x="253" y="3" width="24" height="24" />
         <use href="#crystal" x="338" y="5" width="20" height="20" />
         <use href="#crystal" x="419" y="5" width="20" height="20" />
         <use href="#crystal" x="500" y="0" width="30" height="30" />
      </svg>
   );
}


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default CasePage;
