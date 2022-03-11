/* eslint-disable @next/next/no-img-element */
import Flower from "./flower";
import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { DateTime } from "luxon";

/* eslint-disable jsx-a11y/alt-text */

function Resepsi() {
  const [hari, setHari] = useState(0);
  const [jam, setJam] = useState(0);
  const [menit, setMenit] = useState(0);
  const [detik, setDetik] = useState(0);

  const timer = () => {
    const countDate = DateTime.fromFormat(
      "March 27 2022 09:00:00",
      "LLLL dd yyyy HH:mm:ss",
      {
        zone: "Asia/Jakarta",
      }
    );
    const now = DateTime.now().setZone("Asia/Jakarta");
    const gap = countDate - now;

    const detik = 1000;
    const menit = detik * 60;
    const jam = menit * 60;
    const hari = jam * 24;

    setHari(Math.floor(gap / hari));
    setJam(Math.floor((gap % hari) / jam));
    setMenit(Math.floor((gap % jam) / menit));
    setDetik(Math.floor((gap % menit) / detik));
  };

  setInterval(() => timer(), 1000);
  return (
    <div className="resepsi container" data-aos="fade-up">
      <Flower />
      <div className="resepsi-content">
        <div className="header">
          <p>Resepsi</p>
        </div>
        <div className="sesi">
          <p>Sesi I: 10:00 - 12:00</p>
          <p>Sesi II: 13:00 - 15:00</p>
          <p>Sesi III: 15:00 - 17:00</p>
        </div>
        <div className="tanggal">
          <div className="tanggal-left-section">
            <p>Minggu</p>
          </div>
          <div className="tanggal-middle-section">
            <div className="tanggal-middle-first-child">
              <p>27</p>
            </div>
            <div className="tanggal-middle-last-child">
              <p>2022</p>
            </div>
          </div>
          <div className="tanggal-right-section">
            <p>Maret</p>
          </div>
        </div>
        <div className="alamat">
          <div className="alamat-header">
            <p>Lokasi Acara:</p>
          </div>
          <div className="alamat-nama">
            <p>Mesjid azzahratush shufiyyah</p>
          </div>
          <div className="alamat-lengkap">
            <p>
              Jl. Peta Sel. Dalam rt.09/01, Kalideres, Kec. Kalideres, Kota
              Jakarta Barat, Daerah Khusus Ibukota Jakarta 11840
            </p>
          </div>
        </div>
        <div className="count-down">
          <div className="container-waktu">
            <p className="waktu">{hari}</p>
            <p>Hari</p>
          </div>
          <div className="container-waktu">
            <p className="waktu">{jam}</p>
            <p>Jam</p>
          </div>
          <div className="container-waktu">
            <p className="waktu">{menit}</p>
            <p>Menit</p>
          </div>
          <div className="container-waktu">
            <p className="waktu">{detik}</p>
            <p>Detik</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .resepsi {
          margin-bottom: 3rem;
        }

        .resepsi-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .header {
          font-family: "Great Vibes", serif;
          letter-spacing: 0.245rem;
          font-size: 2em;
          font-weight: bold;
        }

        .sesi {
          font-weight: bold;
          text-align: center;
        }

        .tanggal {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: rgb(102, 51, 0);
        }

        .tanggal-left-section {
          font-size: 2.125em;
        }

        .tanggal-middle-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.125rem;
          font-weight: bold;
        }

        .tanggal-middle-first-child {
          font-size: 2em;
        }

        .tanggal-right-section {
          font-size: 2.125em;
        }

        .alamat-header {
          font-family: "Great Vibes", serif;
          letter-spacing: 0.245rem;
          font-size: 1.5em;
          display: flex;
          justify-content: center;

          margin: 0.5rem 0;
        }

        .alamat-nama {
          font-weight: bold;
          display: flex;
          justify-content: center;
          margin-bottom: 0.25rem;
        }

        .alamat-lengkap {
          display: flex;
          justify-content: center;
        }

        .alamat-lengkap > p {
          text-align: center;
        }

        .count-down {
          display: flex;
          gap: 0.5rem;
          padding: 1rem;
          background-color: rgb(244, 223, 186);
          text-align: center;
          border-radius: 0.5rem;
        }

        .waktu {
          font-size: 1.5em;
          font-weight: bold;
          margin-bottom: 0.25rem;
        }
      `}</style>
    </div>
  );
}

export default Resepsi;
