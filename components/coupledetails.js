import Flower from "./flower";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
function CoupleDetails(props) {
  return (
    <div id="couple">
      <div className="couple container" data-aos="fade-up">
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
          <div className="love-story">
            <div
              className="love-story-button"
              onClick={() => props.setDisplayLoveStory(true)}
            >
              <p>Love Story</p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .couple {
            margin-bottom: 3rem;
          }
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
            font-family: "Great Vibes", serif;
            letter-spacing: 0.245rem;
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

          .love-story-button {
            padding: 0.5rem 0.75rem;
            background-color: rgb(191, 146, 112);
            border-radius: 0.25rem;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
              rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
          }
        `}</style>
      </div>
    </div>
  );
}

export default CoupleDetails;
