import Akad from "../components/akad";
import Couple from "../components/couple";
import CoupleDetails from "../components/coupledetails";
import Maps from "../components/maps";
import Prologue from "../components/prologue";
import Resepsi from "../components/resepsi";
import Timeline from "../components/timeline";

export default function Home() {
  return (
    <HomeWrapper className="home">
      <Couple />
      <Prologue />
      <CoupleDetails />
      <Timeline />
      <Akad />
      <Resepsi />
      <Maps />

      <style global jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Alex+Brush&family=Alice&family=Great+Vibes&display=swap");

          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }

          html,
          body {
            position: relative;
            height: 100%;
            width: 100%;
            overflow: hidden;
          }

          .container {
            position: relative;
            width: 86%;
            margin: 0 auto 3rem auto;
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
            background-color: rgb(191, 146, 112);
            height: inherit;
          }
        `}
      </style>
    </HomeWrapper>
  );
}

function HomeWrapper({ children }) {
  return (
    <div className="home-wrapper">
      <div className="content-wrapper">
        <div className="image-top">
          <img src="/asset/corner-flower-2.png" alt="corner-flower-2.png" />
        </div>
        {children}
        <div className="image-bot">
          <img src="/asset/corner-flower-3.png" alt="corner-flower-3.png" />
        </div>
      </div>

      <style jsx>{`
        .home-wrapper {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .home-wrapper::before {
          content: "";
          width: 100%;
          height: 100vh;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -20;
          background-color: rgb(191, 146, 112);
        }

        .content-wrapper {
          height: 100%;
          overflow: auto;
        }

        .image-top {
          position: absolute;
          width: 16rem;
          top: -2rem;
          left: -3rem;
          z-index: -10;
        }

        .image-top > img {
          width: 16rem;
        }

        .image-bot {
          width: 13rem;
          position: absolute;
          bottom: -5.5rem;
          right: 0;
          z-index: -10;
          overflow: hidden;
        }

        .image-bot > img {
          width: 16rem;
        }
      `}</style>
    </div>
  );
}
