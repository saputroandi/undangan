function Couple() {
  return (
    <section className="couple">
      <div className="head">
        <h1>The Wedding of</h1>
      </div>
      <div className="couple-name">
        <div className="couple-name-girl">
          <p>Majikan</p>
        </div>
        <div className="couple-name-and">
          <p>Dan</p>
        </div>
        <div className="couple-name-boy">
          <p>Hamba</p>
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
        }
      `}</style>
    </section>
  );
}

export default Couple;
