import { useEffect, useState } from "react";
import { sanityClient } from "../lib/sanity";
import Flower from "./flower";
import { DateTime } from "luxon";

function Ucapan() {
  const initialState = {
    nama: "",
    pesan: "",
  };

  const [write, setWrite] = useState(false);
  const [data, setData] = useState([]);
  const [pesanBaru, setPesanBaru] = useState(initialState);
  const { ts } = DateTime.now();

  const handleFetch = async () => {
    const res = await sanityClient.fetch(
      `*[_type == "ucapan"] | order(_createdAt desc)`
    );

    setData(res);
  };

  const handleChangeNama = (event) => {
    setPesanBaru({ ...pesanBaru, nama: event.target.value });
  };

  const handleChangePesan = (event) => {
    setPesanBaru({ ...pesanBaru, pesan: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (pesanBaru.nama.length > 0 && pesanBaru.pesan.length > 0) {
      await sanityClient.create({
        _id: ts,
        _type: "ucapan",
        sender: pesanBaru.nama,
        pesan: pesanBaru.pesan,
      });
      setPesanBaru(initialState);
      setWrite(true);
      handleFetch();
    }
  };

  useEffect(() => {
    handleFetch();
  }, [data]);

  return (
    <section className="ucapan container">
      <Flower />
      <div className="ucapan-wrapper">
        <div className="header">
          <p>Ucapan & Doa</p>
        </div>

        {!write && (
          <div className="input-fields">
            <div>
              <div className="input-label">
                <p>Nama:</p>
              </div>
              <div>
                <input
                  placeholder="Lina"
                  onChange={handleChangeNama}
                  value={pesanBaru.nama}
                />
              </div>
            </div>
            <div>
              <div className="input-label">
                <p>Pesan:</p>
              </div>
              <input
                placeholder="Selamat menikah..."
                value={pesanBaru.pesan}
                onChange={handleChangePesan}
              />
            </div>

            <div>
              <button onClick={handleSubmit}>Kirim</button>
            </div>
          </div>
        )}

        <div className="ucapan-container">
          <div className="ucapan-content">
            {data.map((currentData, idx) => {
              return (
                <div className="ucapan-data" key={idx}>
                  <div className="ucapan-sender">
                    <p>❤️ {currentData.sender}</p>
                  </div>
                  <div className="ucapan-pesan">
                    <p>{currentData.pesan}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .ucapan-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .header {
          font-family: "Great Vibes", serif;
          letter-spacing: 0.245rem;
          font-size: 2em;
          font-weight: bold;
        }

        .input-label {
          font-weight: bold;
          margin-bottom: 0.25rem;
          width: 100%;
        }

        .input-fields {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          width: 100%;
        }

        input {
          width: 100%;
          padding: 0.5rem;
          border-radius: 0.25rem;
          border: none;
        }

        .ucapan-container {
          position: relative;
          border-radius: 0.25rem;
          background-color: rgba(255, 255, 255, 0.75);
          height: 16rem;
          width: 100%;
          overflow: scroll;
        }

        .ucapan-content {
          height: inherit;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.5rem 0;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
        }

        .ucapan-data {
          background-color: rgb(191, 146, 112);
          width: 95%;
          padding: 1rem;
          margin-bottom: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          border-radius: 0.25rem;
        }

        .ucapan-sender {
          font-weight: bold;
          letter-spacing: 0.05rem;
        }

        .ucapan-pesan {
          overflow: hidden;
          text-align: justify;
        }

        button {
          padding: 0.5rem 1rem;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}

export default Ucapan;
