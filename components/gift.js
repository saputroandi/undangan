import Flower from "./flower";

function Gift(props) {
  return (
    <div className="gift container" data-aos="fade-up">
      <Flower />
      <div className="gift-wrapper">
        <div className="header">
          <p>Love Gift</p>
        </div>
        <div className="opening">
          <p>
            Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan tanda
            kasih untuk kami, dapat melalui:
          </p>
        </div>
        <div className="rekening-button" onClick={() => props.setVisible(true)}>
          <p>Rekening</p>
        </div>

        <div className="closing">
          <p>Terimakasih</p>
        </div>
      </div>

      <style jsx>{`
        .gift {
          margin-bottom: 3rem;
        }
        .gift-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
          font-size: 0.8em;
        }

        .header {
          font-family: "Great Vibes", serif;
          letter-spacing: 0.245rem;
          font-size: 2em;
          font-weight: bold;
        }

        .rekening-button {
          padding: 0.5rem 1rem;
          background-color: rgb(191, 146, 112);
          border-radius: 0.25rem;
        }

        .closing {
          font-family: "Great Vibes", serif;
          letter-spacing: 0.245rem;
          font-size: 1.2em;
        }

        .fade-enter {
          opacity: 0;
          z-index: -30;
        }

        .fade-enter-active {
          opacity: 1;
          transition: opacity 300ms;
          z-index: -30;
        }

        .fade-exit {
          opacity: 1;
          z-index: -30;
        }

        .fade-exit-active {
          transition: opacity 300ms;
          opacity: 0;
          z-index: -30;
        }
      `}</style>
    </div>
  );
}

export default Gift;
