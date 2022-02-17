/* eslint-disable @next/next/no-img-element */
function CoupleDetails() {
  return (
    <section className="couple container">
      <div className="couple-image">
        <img src="/asset/couple.jpg" alt="couple.jpg" />
      </div>
      <div className="couple-name">
        <div className="couple-name-girl">
          <div className="girl-name">
            <p>Arum</p>
          </div>
          <div>
            <p>Putri dari</p>
          </div>
          <div className="couple-parent">
            <p>Bapak Suparmin dan Ibu Tunik</p>
          </div>
        </div>
        <div className="couple-name-boy">
          <div className="boy-name">
            <p>Andi</p>
          </div>
          <div>
            <p>Putra dari</p>
          </div>
          <div className="couple-parent">
            <p>Bapak Harsoyo dan Ibu Sukatmi</p>
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
          border-radius: 3rem;
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
          gap: 1rem;
        }

        .girl-name > p,
        .boy-name > p {
          font-size: 2.5em;
          font-weight: bold;
        }

        .couple-parent {
          font-size: 1.1em;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}

export default CoupleDetails;
