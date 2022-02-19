import GoogleMapReact from 'google-map-react';

function Maps() {
  return (
    <section className="maps">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=terminal%20kalideres&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          />
          <a href="https://fmovies-online.net" />
          <br />
          <style
            dangerouslySetInnerHTML={{
              __html:
                '.mapouter{position:relative;text-align:right;height:100vw;width:100%;}',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        iframe {
          width: 100%;
          height: 100vw;
        }
      `}</style>
    </section>
  );
}

export default Maps;
