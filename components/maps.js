function Maps() {
  return (
    <div className="maps" data-aos="fade-up">
      <div className="gmap">
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Mesjid+azzahratush+shufiyyah&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          />
        </div>
      </div>

      <style jsx>{`
        .maps {
          display: flex;
          justify-content: center;
          margin-bottom: 3rem;
          z-index: 10;
        }
        .gmap {
          border-radius: 0.5rem;
          width: 85vw;
          height: 100%;
          overflow: hidden;
        }
        iframe {
          width: 100%;
          height: 100vw;
        }
      `}</style>
    </div>
  );
}

export default Maps;
