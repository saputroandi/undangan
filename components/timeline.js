import Flower from "./flower";

function Timeline() {
  return (
    <div className="timeline container" data-aos="fade-up">
      <Flower />
      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-content">
            <h2>25 Nov 2021</h2>
            <p>
              Berkenalan secara tidak sengaja dan tentunya dengan izin Allah di
              media sosial. Dan memutuskan untuk bertemu.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h2>28 Nov 2021</h2>
            <p>Pertama kali bertemu di salah satu cafe</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h2>5 Desember 2021</h2>
            <p>
              Kedua kali bertemu dan saling berkenalan dengan orang tua masing -
              masing.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h2>31 Januari 2022</h2>
            <p>
              Meminta izin orang tua untuk menikah dan membeli persiapan untuk
              lamaran
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h2>13 Februari 2022</h2>
            <p>Lamaran</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h2>27 Maret 2022</h2>
            <p>InsyaAllah menikah 😊</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-item {
          position: relative;
          width: 0.25rem;
          padding: 1rem 0;
          background: grey;
        }

        .timeline-item::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 50%;
          transform: translateX(-50%);
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background: inherit;
        }

        .timeline-content {
          position: relative;
          bottom: 0;
          width: calc(100vw - 9rem);
          padding: 1rem;
          background: rgb(244, 223, 186);
          left: 2.25rem;
          border-radius: 1rem;
        }

        .timeline-content::before {
          content: "";
          position: absolute;
          bottom: 50%;
          width: 0;
          height: 0;
          border-style: solid;
          left: -1rem;
          border-width: 0.5rem 1rem 0.5rem 0;
          border-color: transparent rgb(244, 223, 186) transparent transparent;
        }
      `}</style>
    </div>
  );
}

export default Timeline;
