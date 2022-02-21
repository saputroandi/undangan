import Couple from '../components/couple';
import CoupleDetails from '../components/coupledetails';
import Maps from '../components/maps';
import Prologue from '../components/prologue';
import Timeline from '../components/timeline';

export default function Home() {
  return (
    <div className="home">
      <Couple />
      <Prologue />
      <CoupleDetails />
      <Timeline />
      <Maps />
      <style global jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&family=Alice&family=Great+Vibes&display=swap');

          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
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
            font-family: 'Alice', serif;
            color: rgb(104, 89, 82);
          }

          .home::before {
            content: '';
            position: fixed;
            left: 0;
            right: 0;
            z-index: -1;
            display: block;
            width: 100%;
            height: 100vh;
            background-image: url('/asset/bg-rustic.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 60% 40%;

            -webkit-filter: blur(5px);
            -moz-filter: blur(5px);
            -o-filter: blur(5px);
            -ms-filter: blur(5px);
            filter: blur(5px);
          }
        `}
      </style>
    </div>
  );
}
