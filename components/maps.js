function Maps() {
  // const openInNewTab = (url) => {
  //   const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  //   if (newWindow) newWindow.opener = null;
  // };
  return (
    <div id="maps">
      <div className="maps container" data-aos="fade-up">
        <div className="gmap">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              frameBorder={0}
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?q=Gedung%20Raihan%20Islamic%20Village&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
        <div className="link-button">
          <a
            onClick={() =>
              window.open(
                "https://goo.gl/maps/Nee9enALNz3LeVWW9",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Buka di Google Maps
          </a>
        </div>

        <style jsx>{`
          .maps {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 3rem;
            gap: 1rem;
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

          .link-button {
            padding: 0.5rem 0.75rem;
            background-color: rgb(191, 146, 112);
            border-radius: 0.25rem;
          }

          a {
            color: rgb(0, 0, 0);
            text-decoration: none;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Maps;
