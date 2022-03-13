import { useRouter } from "next/router";

function WelcomePage(props) {
  const router = useRouter();
  const { to, sesi } = router.query;
  console.log(sesi);
  return (
    <div>
      <div className="welcome-page">
        <div className="header">
          <div className="initial">
            <h2>A</h2>
          </div>
          <div className="divider">
            <h2>&</h2>
          </div>
          <div className="initial">
            <h2>A</h2>
          </div>
        </div>
        <div>
          <p>
            <strong>Kepada Yth.</strong>
          </p>
        </div>
        <div>
          <p>Bapak/Ibu/Saudara/i</p>
        </div>
        {to && (
          <div className="nama-tamu">
            <p>{to}</p>
            {sesi && <p>Sesi: {sesi}</p>}
          </div>
        )}
        <div>
          <p>di Tempat</p>
        </div>
        <div
          className="undangan-button"
          onClick={() => props.setDisplayWelcomePage(false)}
        >
          <p>Buka Undangan</p>
        </div>
      </div>

      <style jsx>{`
        .welcome-page {
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          z-index: 45;
          width: 100%;
          height: 100%;
          background-color: rgb(254, 251, 243);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .header {
          display: flex;
          gap: 1rem;
          height: 6rem;
          font-size: 3em;
          font-family: "Alex Brush", cursive;
        }

        .nama-tamu {
          width: 20rem;
          height: 8rem;
          background-color: rgb(211, 222, 220);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2em;
          border-radius: 0.5rem;
          text-align: center;
          gap: 0.85rem;
          flex-direction: column;
        }

        .undangan-button {
          padding: 0.5rem 0.75rem;
          background-color: rgb(191, 146, 112);
          border-radius: 0.25rem;
          animation: welcome 1s linear 0s infinite alternate;
          box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        }

        @keyframes welcome {
          0% {
            transform: scale(1);
            background-color: rgb(191, 146, 112);
          }
          100% {
            transform: scale(1.05);
            background-color: rgb(206, 171, 147);
          }
        }
      `}</style>
    </div>
  );
}

export default WelcomePage;
