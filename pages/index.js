import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Akad from "../components/akad";
import Couple from "../components/couple";
import CoupleDetails from "../components/coupledetails";
import Gift from "../components/gift";
import Maps from "../components/maps";
import Prologue from "../components/prologue";
import Protokol from "../components/protokol";
import Resepsi from "../components/resepsi";
import Timeline from "../components/timeline";
import Ucapan from "../components/ucapan";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <div className="home">
      <div className="image-top">
        <img src="/asset/corner-flower-2.png" alt="corner-flower-2.png" />
      </div>
      <Couple />
      <Prologue />
      <CoupleDetails />
      <Akad />
      <Resepsi />
      <Maps />
      <Timeline />
      <Protokol />
      <Gift />
      <Ucapan />
      <div className="image-bot">
        <img src="/asset/corner-flower-3.png" alt="corner-flower-3.png" />
      </div>

      <style global jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Alex+Brush&family=Alice&family=Great+Vibes&display=swap");

          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            // border: solid 1px red;
          }

          html,
          body {
            position: relative;
            height: 100vh;
            width: 100%;
            // overflow: hidden;
          }

          .container {
            position: relative;
            width: 86%;
            margin: 0 auto;
            background-color: rgba(255, 255, 255, 0.75);
            padding: 2.5rem 2rem;
            border: 2px solid rgb(102, 51, 0);
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
              rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
          }

          .flower {
            width: 55%;
            // width: 14rem;
            position: absolute;
            bottom: -2.8rem;
            left: -3rem;
            z-index: 1;
          }

          .home {
            font-family: "Alice", serif;
            color: rgb(68, 73, 65);
            // background-color: rgb(191, 146, 112);
            padding: 3rem 0;
          }

          .image-top {
            position: fixed;
            width: 15rem;
            top: -2rem;
            left: -3rem;
            z-index: -10;
          }

          .image-top > img {
            width: inherit;
          }

          .image-bot {
            width: 13rem;
            position: fixed;
            bottom: -3rem;
            right: 0;
            z-index: -10;
            overflow: hidden;
          }

          .image-bot > img {
            width: inherit;
          }
        `}
      </style>
    </div>
  );
}
