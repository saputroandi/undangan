import Couple from '../components/couple';
import CoupleDetails from '../components/coupledetails';
import Prologue from '../components/prologue';

export default function Home() {
  return (
    <div>
      <Couple />
      <Prologue />
      <CoupleDetails />
      <style global jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&family=Kaushan+Script&display=swap');

          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }

          body {
            background-color: #eadeb8;
          }

          .container {
            width: 86%;
            margin: 0 auto 2rem auto;
            background-color: #cfb784;
            border-radius: 1rem;
            padding: 2rem;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
              rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
          }
        `}
      </style>
    </div>
  );
}
