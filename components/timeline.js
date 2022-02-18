import Flower from './flower';

function Timeline() {
  return (
    <section className="timeline container">
      <Flower />
      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              quis turpis rutrum, pulvinar purus nec, tristique nulla. Morbi
              sapien erat, suscipit id viverra in, hendrerit non massa. Integer
              porttitor metus risus, a hendrerit erat posuere ut. Fusce ultrices
              erat ut facilisis maximus.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              quis turpis rutrum, pulvinar purus nec, tristique nulla. Morbi
              sapien erat, suscipit id viverra in, hendrerit non massa. Integer
              porttitor metus risus, a hendrerit erat posuere ut. Fusce ultrices
              erat ut facilisis maximus.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              quis turpis rutrum, pulvinar purus nec, tristique nulla. Morbi
              sapien erat, suscipit id viverra in, hendrerit non massa. Integer
              porttitor metus risus, a hendrerit erat posuere ut. Fusce ultrices
              erat ut facilisis maximus.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-item {
          position: relative;
          width: 4px;
          padding: 1rem 0;
          background: grey;
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 50%;
          transform: translateX(-50%);
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: inherit;
        }

        .timeline-content {
          position: relative;
          bottom: 0;
          width: 14rem;
          padding: 15px;
          background: rgb(238, 195, 115);
          left: 30px;
          border-radius: 1rem;
        }

        .timeline-content::before {
          content: '';
          position: absolute;
          bottom: 50%;
          width: 0;
          height: 0;
          border-style: solid;
          left: -15px;
          border-width: 8px 16px 8px 0;
          border-color: transparent rgb(238, 195, 115) transparent transparent;
        }
      `}</style>
    </section>
  );
}

export default Timeline;
