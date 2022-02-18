function Couple() {
  return (
    <section className="couple">
      <div className="head">
        <h1>The Wedding of</h1>
      </div>
      <div className="couple-name">
        <div className="couple-name-girl">
          <p>Arum Setyarini</p>
        </div>
        <div className="couple-name-and">
          <p>Dan</p>
        </div>
        <div className="couple-name-boy">
          <p>Andi Saputro</p>
        </div>
      </div>
      <div className="event-schedule">
        <p>Minggu, 27 Maret 2022</p>
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
          // color: rgb(255, 255, 255);
          font-family: 'Kaushan Script', sans-serif;
          font-size: 1.9em;
          font-weight: bold;
          letter-spacing: 2.5px;
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
      `}</style>
    </section>
  );
}

export default Couple;
