/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
function Couple() {
  return (
    <section className="couple">
      <div className="head">
        <p>Walimatul Ursy</p>
      </div>
      <div className="couple-name">
        <div className="couple-name-girl">
          <p>Arum</p>
        </div>
        <div className="couple-name-and">
          <p>Dan</p>
        </div>
        <div className="couple-name-boy">
          <p>Andi</p>
        </div>
      </div>
      <div className="event-schedule">
        <p>Minggu, 27 Maret 2022</p>
      </div>
      <div className="opening">
        <img src="/asset/opening-flower.png" alt="opening-flower.png" />
      </div>
      <style jsx>{`
        .couple {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          color: rgb(244, 223, 186);
          font-family: 'Great Vibes', sans-serif;
          letter-spacing: 0.245rem;
          font-size: 3.25rem;
          // background-image: url('/asset/rustic-frame.png');
          // background-repeat: no-repeat;
          // background-size: cover;
          // background-position: 60% 40%;
        }

        .couple-name {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .couple-name > * {
          letter-spacing: 0.375rem;
        }

        .event-schedule {
          font-size: 1.5rem;
        }

        .opening > img {
          width: 14rem;
          transform: rotate(-25deg);
        }
      `}</style>
    </section>
  );
}

export default Couple;
