/** @format */

import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Document() {
  return (
    <Html onScroll={() => console.log("d")}>
      <Head>
        <Script
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-B840N99HCC"
        ></Script>
        {/* <Script strategy="beforeInteractive">
          {`if (!window.location.host.startsWith("www")){
                        window.location = window.location.protocol + "//" + "www." + window.location.host + window.location.pathname;
                    }`}
        </Script> */}
        <Script strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-B840N99HCC');`}
        </Script>
        <link
          key="preconnect"
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          key="crossorigin"
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href={`.${asset_prefix}/styles/global.css`} rel="stylesheet" />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="16x16"
          href={`.${asset_prefix}/favicon.ico`}
        />
        <style>{`body { background-color: #191b2b; }.dHKxJz { color: white; background: url(\"/assets/Footer/BG.png\") 0% 0% / cover; padding: 4em 6em; }@media (max-width: 600px) {
  .dHKxJz { padding: 3em 1em; }
}.lgBGBR { display: flex; flex-direction: row; -moz-box-pack: justify; justify-content: space-between; padding-bottom: 3rem; border-bottom: 1px solid rgba(255, 255, 255, 0.2); }@media (max-width: 600px) {
  .lgBGBR { display: block; }
}.iAllvA > img { margin-bottom: 1.5em; }.dnpQcw { display: flex; flex-direction: row; -moz-box-align: center; align-items: center; margin-bottom: 4em; }@media (max-width: 600px) {
  .dnpQcw { display: block; margin-bottom: 3em; }
}.bDUtmP { height: 44px; display: flex; flex-direction: row; border-radius: 30px; padding-left: 0.5em; background: rgba(255, 255, 255, 0.1); width: 300px; }@media (max-width: 600px) {
  .bDUtmP { width: 320px; }
}.bDUtmP input { font-size: 1.125rem; font-weight: 400; color: rgb(255, 255, 255); padding: 0.3rem 0.5rem; width: 100%; background: none; border: medium none; outline: none; border-radius: 30px; }.hyrKel { background: rgb(0, 223, 141); border-radius: 44px; border: medium none; height: 44px; padding: 0px 0.8rem; position: relative; text-align: center; color: rgb(21, 24, 44); font-size: 14px; font-family: \"Barlow\"; font-weight: 500; left: calc(-0.5em - 60px); min-width: 153px; }@media (max-width: 600px) {
  .hyrKel { left: auto; font-size: 16px; font-weight: 600; margin-top: 16px; }
}.bAKlMF { display: flex; gap: 1.5em; }@media (max-width: 600px) {
  .bAKlMF { margin-bottom: 2em; }
}.eqYGXn { font-family: \"Inter\", sans-serif; display: flex; flex-direction: row; -moz-box-pack: start; justify-content: flex-start; gap: 3em; margin-bottom: 3em; }.eqYGXn div.links-box { display: flex; flex-direction: column; gap: 1em; }.eqYGXn .links_box_title { font-weight: 600; font-size: 20px; line-height: 24px; }.gboCKY { font-size: 1rem; font-weight: 400; text-decoration: none; color: currentcolor; }.dgfiLh { font-family: \"Inter\", sans-serif; }@media (max-width: 600px) {
  .dgfiLh { display: none; }
}.dgfiLh p { font-size: 1.25rem; font-weight: 600; }.gSGPAI { margin-top: 1.5rem; display: flex; gap: 1em; }.hVBtMg { font-family: \"Inter\", sans-serif; display: flex; flex-direction: column; gap: 1.5em; }.hVBtMg .icons { margin-right: 0.5rem; }.hVBtMg .title { font-weight: 600; font-size: 20px; line-height: 24px; }.hVBtMg .connect-us-items { display: flex; flex-direction: row; }.hVBtMg .details { font-size: 1rem; font-weight: 400; line-height: 24px; max-width: 200px; }.hVBtMg .details a { text-decoration: none; color: currentcolor; }.jBsoGk { font-family: \"Inter\", sans-serif; display: flex; flex-direction: row-reverse; padding-top: 3em; -moz-box-align: center; align-items: center; -moz-box-pack: justify; justify-content: space-between; }@media (max-width: 600px) {
  .jBsoGk { padding-top: 1.5em; display: block; }
}.jBsoGk p.tm { font-size: 1rem; font-weight: 400; }.jBsoGk div.below-footer-links { display: flex; flex-direction: row; -moz-box-pack: end; justify-content: flex-end; gap: 2em; }@media (max-width: 600px) {
  .jBsoGk div.below-footer-links { -moz-box-pack: justify; justify-content: space-between; margin-bottom: 1.5em; }
}.jBsoGk div.below-footer-links a { text-decoration: none; color: currentcolor; font-size: 1rem; font-weight: 400; }.dmjuP { background-color: transparent; }.ePedtr { margin: 0px auto; color: rgb(21, 24, 44); display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: justify; justify-content: space-between; }@media (max-width: 600px) {
}@media (max-width: 600px) {
  .iQIshf { height: 24px; }
}@media (max-width: 600px) {
  .iQIshf img { height: 100%; width: auto; }
}.hHQHyW { display: flex; -moz-box-align: center; align-items: center; gap: 3em; }@media (max-width: 600px) {
  .hHQHyW { background-color: rgb(26, 28, 43); position: absolute; flex-direction: column; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; gap: 2em; height: 100vh; max-height: 0px; overflow-y: hidden; right: 0px; left: 0px; top: 0px; z-index: 5; opacity: 0; transition: max-height 300ms ease-out 0s, opacity 300ms ease-in 0s; }
}.iErhDO { display: none; padding: 0.5em; background: none; border: medium none; cursor: pointer; }@media (max-width: 600px) {
  .iErhDO { display: block; }
}.iErhDO.open { z-index: 6; }.iErhDO.open + div { height: 100vh; max-height: 100vh; opacity: 1; }.iErhDO img { pointer-events: none; }.WwAVA { text-decoration: none; color: rgb(21, 24, 44); font-size: 16px; font-weight: 500; }@media (max-width: 600px) {
  .WwAVA { color: rgb(255, 255, 255); margin: 0px 1em; }
  .WwAVA:first-child { margin-top: 1em; }
}.jfCFIh { text-decoration: none; text-transform: uppercase; color: currentcolor; font-size: 1rem; font-weight: 600; border: 2px solid rgb(21, 24, 44); border-radius: 100px; padding: 0.5em 1.5em; }@media (max-width: 600px) {
  .jfCFIh { color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); padding: 0.4em 1em; }
  .jfCFIh:last-child { margin: 0px 1em 1em; }
}.iwIyjn { display: flex; flex: 0.5 1 0%; flex-direction: column; -moz-box-pack: start; place-content: start; box-sizing: border-box; }@media (max-width: 600px) {
  .iwIyjn { margin-top: 2em; margin-bottom: 10em; }
}.bDABjz { font-size: 3.5rem; font-weight: 700; color: rgb(255, 255, 255); min-height: 67px; display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; }.gnJuRk { position: relative; height: 67px; display: inline-block; overflow-y: hidden; width: 160px; }.hqizZi { width: 100%; height: 200%; transform: translateY(-100%); color: rgb(32, 49, 174); animation: 2.5s cubic-bezier(0.7, 0.08, 0.03, 0.82) 2.5s infinite normal forwards running boNukT; }.hqizZi span { display: block; height: 50%; top: 0px; right: 0px; }.fCHZcf { margin-top: 1rem; font-size: 20px; font-weight: 400; line-height: 28px; color: rgb(21, 24, 44); }@media (max-width: 600px) {
  .fCHZcf { text-justify: auto; font-weight: 400; font-size: 16px; line-height: 140%; width: 320px; }
}.kuOluy { margin-top: 1.5rem; display: flex; flex-direction: row; min-width: 414px; }@media (max-width: 600px) {
  .kuOluy { display: block; }
}.kmCMa-d { background: rgb(255, 255, 255); border-radius: 30px; display: flex; flex-direction: row; -moz-box-align: center; align-items: center; padding: 12px 16px; width: 80%; box-sizing: border-box; }@media (max-width: 600px) {
  .kmCMa-d { width: 320px; margin-bottom: 1em; }
}.hLOUVZ { margin-right: 10px; font-size: 18px; }.QtBqc { height: 150%; flex: 0.7 1 0%; border: medium none; font-size: 18px; }.QtBqc:focus { outline: none; }.bwRmcl { background: rgb(32, 49, 174); font-size: 16px; border-radius: 47px; position: relative; border: medium none; height: 50px; right: 80px; top: 0px; color: rgb(255, 255, 255); width: 250px; min-width: 200px; padding: 15.5px 24px; cursor: pointer; font-family: \"Barlow\"; }@media (max-width: 600px) {
  .bwRmcl { right: 0px; font-size: 1rem; font-weight: 600; }
}.cYMQUa { display: flex; flex-direction: row; -moz-box-pack: justify; justify-content: space-between; margin-top: 4rem; }@media (max-width: 600px) {
  .cYMQUa { width: 320px; height: auto; margin-top: 3em; margin-bottom: 24px; }
}.CZTIx { display: flex; flex-direction: column; -moz-box-align: start; align-items: start; }@media (max-width: 600px) {
  .CZTIx { align-items: flex-start; width: 30%; }
}.jlXusx { font-weight: 700; font-size: 40px; line-height: 48px; color: rgb(51, 54, 76); }@media (max-width: 600px) {
  .jlXusx { font-size: 20px; line-height: 24px; }
}.fViBKM { color: rgb(0, 0, 0); font-size: 20px; margin-right: 10px; }.hftOGC { font-weight: 400; font-size: 18px; line-height: 22px; color: rgb(72, 75, 95); }@media (max-width: 600px) {
  .hftOGC { font-size: 12px; }
}.ccunxY { padding: 2rem; background: url(\"/assets/Footer/BG.png\"); }@media (max-width: 600px) {
  .ccunxY { padding: 0.5rem; width: 100vw; margin-bottom: 7.5em; }
}.elnItu { background-color: rgb(0, 223, 141); border-radius: 40px; padding: 3em 3em 7.5em; box-sizing: border-box; }@media (max-width: 600px) {
  .elnItu { padding: 1.5em 1em 7.5em; }
}.iEBQwV { display: flex; flex-direction: row; -moz-box-pack: justify; justify-content: space-between; width: 80%; margin: 4em auto 0px; position: relative; }@media (max-width: 600px) {
  .iEBQwV { display: block; margin: 0px; width: auto; height: 700px; }
}@media (max-width: 600px) {
  .ivGCCI { width: 80%; margin: -10rem 10% 0px; transform: translateY(50%); }
}.eLZkQA { height: 588px; width: 303px; aspect-ratio: 5 / 11; transition: opacity 200ms ease-in-out 0s; border-radius: 15px; position: absolute; right: 0px; }@media (max-width: 600px) {
  .eLZkQA { border-radius: 30px; width: 251px; display: block; left: 50%; transform: translateX(-50%); opacity: 1; height: 487px; }
}.eLZkQA.active { opacity: 1; }.eLZkQA.active.exiting { opacity: 0; }.eEMTXc { color: white; display: flex; flex-direction: column; padding: 2rem 6em; margin-bottom: 2rem; }@media (max-width: 600px) {
  .eEMTXc { padding: 1rem; display: flex; flex-direction: column; -moz-box-pack: center; justify-content: center; }
}.jymuUe { display: flex; flex-direction: row; -moz-box-align: center; align-items: center; width: 100%; }@media (max-width: 600px) {
  .jymuUe { display: flex; flex-direction: column; -moz-box-align: center; align-items: center; margin-bottom: -3rem; margin-top: 48px; }
}.jymuUe .available_on_text { font-weight: 400; font-size: 20px; line-height: 24px; color: rgb(201, 202, 208); margin-right: 2.5em; }@media (max-width: 600px) {
  .jymuUe .available_on_text { text-align: center; width: 100%; padding-left: 1rem; margin-bottom: 1em; }
}@media (max-width: 600px) {
  .jymuUe .store_images { margin: 0px; }
}.exGkJl { display: flex; flex-direction: row-reverse; -moz-box-pack: justify; justify-content: space-between; -moz-box-align: center; align-items: center; margin-top: 6em; margin-bottom: 3rem; }@media (max-width: 600px) {
  .exGkJl { display: flex; flex-direction: column; -moz-box-pack: justify; justify-content: space-between; -moz-box-align: center; align-items: center; }
}.exGkJl .text_container { display: flex; flex-direction: row; gap: 3em; }@media (max-width: 600px) {
  .exGkJl .text_container { width: auto; }
}.exGkJl .features_text_title { font-weight: 400; font-size: 18px; line-height: 22px; text-transform: capitalize; color: rgb(255, 255, 255); }@media (max-width: 600px) {
  .exGkJl .features_text_title { font-size: 12px; }
}.exGkJl .features_text_value { font-weight: 700; font-size: 40px; line-height: 48px; color: rgb(0, 223, 141); }@media (max-width: 600px) {
  .exGkJl .features_text_value { font-size: 20px; line-height: normal; }
}.exGkJl .app_feature_img_container { display: flex; flex-direction: row; gap: 3em; }@media (max-width: 600px) {
  .exGkJl .app_feature_img_container { width: auto; display: grid; grid-template-columns: repeat(4, 1fr); column-gap: 2.5em; margin-bottom: 3em; }
}@media (max-width: 600px) {
  .exGkJl .app_feature_img_container img { display: block; width: 100%; height: 48px; }
}.dKrOWG { display: flex; gap: 1em; }.hTxZE { background-color: rgb(255, 255, 255); padding: 6em 0px; }@media (max-width: 600px) {
  .hTxZE { padding: 3em 0px; }
}.jzmZDm { margin: 0px auto; width: min(70vw, 1200px); color: rgb(21, 24, 44); padding: 0px 3rem; }@media (max-width: 600px) {
  .jzmZDm { width: 90vw; padding: 0px; }
}.IEPHX { color: rgb(21, 24, 44); font-size: 4rem; font-weight: 700; line-height: 76px; margin-bottom: 0.5em; }@media (max-width: 600px) {
  .IEPHX { font-size: 40px; line-height: 48px; }
}.jRkJyH { font-size: 1.5rem; font-weight: 400; line-height: 33.6px; max-width: 480px; margin-bottom: 2em; }@media (max-width: 600px) {
  .jRkJyH { font-size: 1rem; font-weight: 400; line-height: 22px; }
}.locZME { display: flex; -moz-box-pack: justify; justify-content: space-between; -moz-box-align: center; align-items: center; gap: 2.5em; }@media (max-width: 600px) {
  .locZME { display: none; }
}.dOJgSk { font-size: 1rem; font-weight: 700; background: none; border: medium none; font-family: inherit; color: rgb(0, 223, 141); text-transform: uppercase; cursor: pointer; margin-bottom: 6em; }@media (max-width: 600px) {
}.kUjCFJ { font-size: 1rem; font-weight: 700; background: none; border: medium none; font-family: inherit; color: rgb(115, 117, 133); text-transform: uppercase; cursor: pointer; margin-bottom: 6em; }@media (max-width: 600px) {
}.jMkxeJ { padding: 0px; max-height: 0px; overflow: hidden; }.jMkxeJ:not(:last-child) { margin-bottom: 3em; }@media (max-width: 600px) {
  .jMkxeJ { padding-left: 0.5em; }
}.irmItr { display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: justify; justify-content: space-between; padding: 0.5em 0px; }.irmItr h2 { font-size: 1rem; font-weight: 700; text-transform: uppercase; color: rgb(115, 117, 133); }.irmItr button { background: none; border: medium none; }.irmItr.active h2 { color: rgb(0, 223, 141); }.irmItr.active.active + div { padding: 1em 0px 1em 0.5em; max-height: none; }.bXfHDu { display: grid; grid-template-columns: repeat(12, 1fr); column-gap: 1em; margin-top: 10px; }@media (max-width: 600px) {
  .bXfHDu { display: none; visibility: hidden; }
}.cYDZfN { display: none; scroll-snap-align: end; }@media (max-width: 600px) {
  .cYDZfN { display: block; }
}.jrQOdE { grid-column: 1 / 7; opacity: 1; transition: opacity 200ms ease-in 0s; }.jrQOdE.exiting { opacity: 0; }.jrQOdE.exiting img { opacity: 0; }.jrQOdE.entering { opacity: 1; }.jrQOdE.entering img { opacity: 1; }.XkPnz { grid-column: 7 / 13; place-self: center end; position: relative; width: 318px; height: 446px; }.fBehLN { color: rgb(255, 108, 64); font-size: 40px; font-weight: 700; margin-bottom: 0.5em; }@media (max-width: 600px) {
  .fBehLN { font-size: 32px; }
}.gWhFLP { color: rgb(245, 204, 81); font-size: 40px; font-weight: 700; margin-bottom: 0.5em; }@media (max-width: 600px) {
  .gWhFLP { font-size: 32px; }
}.gKBITe { color: rgb(255, 192, 213); font-size: 40px; font-weight: 700; margin-bottom: 0.5em; }@media (max-width: 600px) {
  .gKBITe { font-size: 32px; }
}.jrbXMW { color: rgb(116, 213, 255); font-size: 40px; font-weight: 700; margin-bottom: 0.5em; }@media (max-width: 600px) {
  .jrbXMW { font-size: 32px; }
}.idycwU { font-size: 36px; font-weight: 600; line-height: 50.4px; width: 468px; }@media (max-width: 600px) {
  .idycwU { font-size: 24px; width: 312px; line-height: 33.6px; margin-bottom: 1em; }
}.gDwRJz { height: 500px; aspect-ratio: 5 / 11; display: block; opacity: 0; transition: opacity 200ms ease-in-out 0s; border-radius: 15px; position: absolute; bottom: 0px; right: 0px; }@media (max-width: 600px) {
  .gDwRJz { border-radius: 30px; position: relative; width: 70%; height: auto; margin-bottom: 1.5em; opacity: 1; }
}.gDwRJz.active { opacity: 1; }.gDwRJz.active.exiting { opacity: 0; }.bRJgrV { background: url(\"/assets/Footer/BG.png\") 0% 0% / cover; padding: 80px 0px; }@media (max-width: 600px) {
  .bRJgrV { padding: 50px 0px; }
}.dfLACS { margin: 0px auto; width: min(70vw, 1200px); color: rgb(255, 255, 255); }@media (max-width: 600px) {
  .dfLACS { width: 90vw; }
}.jlTYmA { font-size: 56px; font-weight: 700; line-height: 67px; margin-bottom: 18px; }@media (max-width: 600px) {
  .jlTYmA { font-size: 40px; line-height: 48px; margin-bottom: 16px; }
}.gpZiXG { font-size: 20px; font-weight: 400; }@media (max-width: 600px) {
  .gpZiXG { font-size: 16px; }
}.cjWPGP { margin-top: 54px; display: grid; grid-template-columns: repeat(3, 1fr); -moz-box-pack: justify; justify-content: space-between; gap: 2em; }@media (max-width: 600px) {
  .cjWPGP { display: flex; overflow-x: auto; margin-top: 40px; margin-bottom: 10px; scrollbar-width: none; }
  .cjWPGP::-webkit-scrollbar { display: none; }
  .cjWPGP::-webkit-scrollbar-track { display: none; }
}.bSeSEq { border: 1px solid rgb(72, 75, 95); border-radius: 20px; padding: 2em; }@media (max-width: 600px) {
  .bSeSEq { width: 236px; min-width: 270px; padding: 24px; }
}.ceffE { display: flex; gap: 1em; margin-bottom: 24px; }@media (max-width: 600px) {
  .ceffE { margin-bottom: 1.5em; }
}.ceffE h3 { font-size: 24px; font-weight: 600; }@media (max-width: 600px) {
  .ceffE h3 { font-size: 18px; }
}.jxNavI { font-size: 20px; font-weight: 400; line-height: 30px; }@media (max-width: 600px) {
  .jxNavI { line-height: 28px; font-size: 16px; }
}.bCjAyu { background-color: rgb(255, 255, 255); padding: 6em 0px; }@media (max-width: 600px) {
  .bCjAyu { padding: 60px 0px; }
}.fsFlFg { margin: 0px auto; width: min(70vw, 1200px); color: rgb(21, 24, 44); }@media (max-width: 600px) {
  .fsFlFg { width: 90vw; }
}.kWtHDA { font-size: 1.5rem; font-weight: 600; }@media (max-width: 600px) {
  .kWtHDA { font-size: 1.125rem; }
}.ifmKHR { margin-top: 56px; display: grid; grid-template-columns: min-content 1fr; gap: 2em; }@media (max-width: 600px) {
  .ifmKHR { margin-top: 36px; gap: 1em; }
}.fZkjwI { display: block; position: relative; top: 14px; }@media (max-width: 600px) {
  .fZkjwI { width: 40px; height: auto; top: 11px; }
}.digweX { display: grid; grid-template-columns: 2fr 1fr; grid-template-areas: \"a b\" \"a c\"; row-gap: 3em; }@media (max-width: 600px) {
  .digweX { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; }
  .digweX::-webkit-scrollbar { display: none; }
  .digweX::-webkit-scrollbar-track { display: none; }
}.fHsGer { grid-area: a; }@media (max-width: 600px) {
  .fHsGer { width: calc(-1em - 40px + 90vw); min-width: calc(-1em - 40px + 90vw); scroll-snap-align: center; }
}.fHsGet { grid-area: c; }@media (max-width: 600px) {
  .fHsGet { width: calc(-1em - 40px + 90vw); min-width: calc(-1em - 40px + 90vw); scroll-snap-align: center; }
}.fHsGes { grid-area: b; }@media (max-width: 600px) {
  .fHsGes { width: calc(-1em - 40px + 90vw); min-width: calc(-1em - 40px + 90vw); scroll-snap-align: center; }
}.gsOAGm { max-width: 440px; font-size: 36px; font-weight: 600; line-height: 50.4px; }@media (max-width: 600px) {
  .gsOAGm { font-weight: 600; font-size: 26px; line-height: 36.4px; }
}.ifcPSg { max-width: 440px; font-size: 18px; font-weight: 400; line-height: 25.2px; }@media (max-width: 600px) {
  .ifcPSg { font-weight: 600; font-size: 26px; line-height: 36.4px; }
}.crwaQT { display: flex; margin-top: 20px; flex-direction: row; -moz-box-align: center; align-items: center; }.crwaQT div.img { margin-right: 1em; width: 50px; aspect-ratio: 1 / 1; height: auto; }.crwaQT div.img img { width: 100%; height: auto; }.crwaQT div.text { display: flex; flex-direction: column; }.crwaQT div.text h3 { font-size: 18px; font-weight: 600; line-height: 21.6px; margin-bottom: 5px; }@media (max-width: 600px) {
  .crwaQT div.text h3 { font-size: 14px; font-weight: 600; }
}.crwaQT div.text h4 { font-size: 18px; font-weight: 500; color: rgb(32, 49, 174); }@media (max-width: 600px) {
  .crwaQT div.text h4 { font-size: 14px; font-weight: 500; }
}.lnKRLc { display: none; }@media (max-width: 600px) {
  .lnKRLc { display: flex; gap: 0.3em; grid-column: 2 / 3; margin-top: 0.5em; }
  .lnKRLc > div { width: 5px; height: 5px; transition: width 200ms ease-out 0s; background: rgb(158, 160, 170); border-radius: 100px; flex: 0 0 auto; order: 3; -moz-box-flex: 0; }
  .lnKRLc > div.active { width: 28px; }
}.icxJPp { height: 100vh; background-image: url(\"/assets/HomePage/TradingLeagues_app_mockup.svg\"); background-position: 50% 50%; background-repeat: no-repeat; background-attachment: fixed; background-size: cover; }@media (max-width: 600px) {
  .icxJPp { height: 400px; background-size: cover; background-attachment: scroll; }
}.fibXJN { background: url(\"/assets/Footer/BG.png\") 0% 0% / cover; padding: 120px 0px; }@media (max-width: 600px) {
  .fibXJN { padding: 50px 0px; }
}.lojEtI { margin: 0px auto; width: 75vw; color: rgb(255, 255, 255); }@media (max-width: 600px) {
  .lojEtI { width: 90vw; }
}.gpbBdt { font-size: 36px; font-weight: 600; margin-bottom: 50px; }@media (max-width: 600px) {
  .gpbBdt { font-size: 26px; line-height: 36.4px; }
}.exldIw { margin-top: 3em; display: grid; grid-template-columns: repeat(3, max(256px, 20%)); -moz-box-pack: justify; justify-content: space-between; }@media (max-width: 600px) {
  .exldIw { display: block; }
}@media (max-width: 600px) {
  .hnPCoe { margin-bottom: 2em; }
}.hnPCoe h3 { font-size: 20px; font-weight: 500; }@media (max-width: 600px) {
  .hnPCoe h3 { font-size: 16px; }
}.hnPCoe img { display: block; margin: 22px 0px; width: 100%; height: auto; }@media (max-width: 600px) {
  .hnPCoe img { margin: 12px 0px; }
}.hnPCoe p { font-size: 20px; font-weight: 400; line-height: 28px; }@media (max-width: 600px) {
  .hnPCoe p { font-size: 16px; font-weight: 400; line-height: 22.4px; }
}.cqroRt { background-color: rgb(0, 223, 141); padding: 6em 0px; }@media (max-width: 600px) {
  .cqroRt { padding: 50px 0px; }
}.bKUwoM { margin: 0px auto; width: 90vw; display: grid; grid-template-columns: repeat(12, 1fr); column-gap: 1em; }@media (max-width: 600px) {
  .bKUwoM { display: block; }
}.gVENmH { grid-column: 2 / 13; }.ecrdXh { grid-column: 2 / 12; display: flex; -moz-box-pack: justify; justify-content: space-between; }@media (max-width: 600px) {
  .ecrdXh { display: block; }
}.kWfMKS { color: rgb(21, 24, 44); font-size: 64px; font-weight: 700; line-height: 76.8px; width: 856px; margin-bottom: 100px; }@media (max-width: 600px) {
  .kWfMKS { font-size: 40px; width: auto; line-height: 48px; margin-bottom: 30px; }
}@media (max-width: 600px) {
  .hLjSjo { margin-bottom: 4em; }
}.hLjSjo h3 { font-size: 40px; font-weight: 700; margin-bottom: 14px; }@media (max-width: 600px) {
  .hLjSjo h3 { font-size: 26px; line-height: 31.2px; margin-bottom: 10px; }
}.hLjSjo p { font-size: 20px; font-weight: 400; line-height: 28px; width: 445px; margin-bottom: 42px; }@media (max-width: 600px) {
  .hLjSjo p { font-size: 16px; line-height: 22.4px; width: auto; margin-bottom: 16px; }
}.gUHmgW { width: max-content; position: relative; }@media (max-width: 600px) {
  .gUHmgW { width: auto; }
}.gUHmgW label { font-size: 16px; font-weight: 400; line-height: 22.4px; display: block; margin-bottom: 20px; }@media (max-width: 600px) {
  .gUHmgW label { margin-bottom: 10px; }
}.gUHmgW > div { height: 40px; width: 100%; display: flex; }@media (max-width: 600px) {
  .gUHmgW > div { position: relative; flex-direction: column; }
}.gUHmgW > div div.input { height: 100%; border-radius: 20px; background-color: rgb(255, 255, 255); display: flex; flex-direction: row; -moz-box-align: center; align-items: center; padding-left: 1em; width: 320px; }@media (max-width: 600px) {
  .gUHmgW > div div.input { padding: 10.5px 10.5px 10.5px 18px; margin-bottom: 16px; }
}.gUHmgW > div div.input span { display: inline-block; }.gUHmgW > div div.input span.input { margin-left: 0.5em; }.gUHmgW > div input { display: inline-block; height: 100%; border: medium none; padding: 0px 1.5em; }@media (max-width: 600px) {
  .gUHmgW > div input { position: absolute; bottom: 0px; }
}.gUHmgW > div input[type=\"text\"] { outline: none; padding: 0px; font-size: 0.875rem; }@media (max-width: 600px) {
  .gUHmgW > div input[type=\"text\"] { position: relative; }
}.gUHmgW > div input[type=\"text\"].failure::-webkit-input-placeholder { color: red; }.gUHmgW > div input[type=\"text\"].failure::placeholder { color: red; }.gUHmgW > div input[type=\"text\"].failure::placeholder { color: red; }.gUHmgW > div input[type=\"submit\"] { border-radius: 20px; width: 120px; font-weight: 500; position: relative; margin-left: -2rem; background-color: rgb(32, 49, 174); text-transform: uppercase; color: rgb(255, 255, 255); cursor: pointer; }@media (max-width: 600px) {
  .gUHmgW > div input[type=\"submit\"] { padding: 10.5px 16px; margin-left: 0px; }
}.gUHmgW > div > span { position: relative; display: flex; -moz-box-align: center; align-items: center; -moz-box-pack: center; justify-content: center; height: 100%; border-radius: 20px; left: -20px; background-color: rgb(32, 49, 174); width: 103.77px; right: 0px; bottom: 0px; padding: 5px 0px; }@media (max-width: 600px) {
  .gUHmgW > div > span { position: absolute; left: auto; }
}.jZvsJF { background-color: rgb(255, 255, 255); border-color: rgb(0, 102, 64) rgb(0, 102, 64) currentcolor; border-style: solid solid none; border-width: 10px 10px medium; border-image: none 100% / 1 / 0 stretch; margin-bottom: -6em; border-radius: 40px 0px 0px; width: 408px; padding: 2.5em 2em 5em; position: relative; }@media (max-width: 600px) {
  .jZvsJF { width: 80%; margin: 80px auto -3.1em; padding: 1.5em 1.5em 6em; }
}.jZvsJF h3 { font-size: 64px; font-weight: 600; margin-bottom: 21px; }@media (max-width: 600px) {
  .jZvsJF h3 { font-size: 44px; margin-bottom: 15px; }
}.jZvsJF h3 span { font-size: 16px; font-weight: 500; font-family: \"Inter\"; }@media (max-width: 600px) {
  .jZvsJF h3 span { font-size: 11px; }
}.jZvsJF p { font-size: 24px; font-weight: 500; line-height: 31.2px; }@media (max-width: 600px) {
  .jZvsJF p { font-size: 16px; line-height: 21.27px; }
}.jZvsJF p:not(:last-child) { margin-bottom: 1em; }.RTLqo { position: absolute; display: block; inset: -60px -40px auto auto; height: 148px; transform: rotate(10deg); width: auto; }@media (max-width: 600px) {
  .RTLqo { height: 101px; }
}.jlmGmQ { position: absolute; display: block; inset: auto 40px -10px auto; height: 94.46px; transform: rotate(27deg); width: auto; }@media (max-width: 600px) {
  .jlmGmQ { height: 60px; }
}.khrlh { position: absolute; display: block; inset: auto -10px -30px auto; height: 60px; transform: rotate(10deg); width: auto; }@media (max-width: 600px) {
  .khrlh { height: 60px; }
}.hHgpDz { position: absolute; display: block; inset: -25px 70px auto auto; height: 25px; transform: rotate(0deg); width: auto; }@media (max-width: 600px) {
  .hHgpDz { height: 25px; }
}.qkdkN { position: absolute; display: block; inset: 50px -60px auto auto; height: 35px; transform: rotate(10deg); width: auto; }@media (max-width: 600px) {
  .qkdkN { height: 35px; }
}.ffnaHW { position: absolute; display: block; inset: auto 25px 30px auto; height: 20px; transform: rotate(0deg); width: auto; }@media (max-width: 600px) {
  .ffnaHW { height: 20px; }
}.hysCed { position: absolute; display: block; inset: auto auto 60px -45px; height: 55px; transform: rotate(-15deg); width: auto; }@media (max-width: 600px) {
  .hysCed { height: 55px; }
}@keyframes boNukT {
0% { transform: translateY(-100%); }
50% { transform: translateY(-50%); }
100% { transform: translateY(0px); }
}@keyframes boNukT {
0% { transform: translateY(-100%); }
50% { transform: translateY(-50%); }
100% { transform: translateY(0px); }
}`}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
