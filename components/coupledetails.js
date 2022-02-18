import Flower from './flower';

/* eslint-disable @next/next/no-img-element */
function CoupleDetails() {
  return (
    <section className="couple container">
      <Flower />
      <div className="couple-image">
        <img src="/asset/couple.jpg" alt="couple.jpg" />
      </div>
      <div className="couple-name">
        <div className="couple-name-girl">
          <div className="girl-name">
            <p>Arum Setyarini</p>
          </div>
          <div>
            <p>Putri Pertama dari</p>
          </div>
          <div className="couple-parent">
            <p>Bapak Suparmin</p>
            <p>dan</p>
            <p>Ibu Tunik Setiyani</p>
          </div>
        </div>
        <div className="couple-name-boy">
          <div className="boy-name">
            <p>Andi Saputro</p>
          </div>
          <div>
            <p>Putra Pertama dari</p>
          </div>
          <div className="couple-parent">
            <p>Bapak Harsoyo</p>
            <p>dan</p>
            <p>Ibu Sukatmi</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .couple-image {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 1rem;
        }

        .couple-image > img {
          width: inherit;
        }

        .couple-name {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .couple-name-girl,
        .couple-name-boy {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
        }

        .girl-name > p,
        .boy-name > p {
          font-size: 2em;
          font-weight: bold;
        }

        .couple-parent {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          font-size: 1.1em;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}

export default CoupleDetails;
