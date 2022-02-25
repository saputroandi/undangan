/* eslint-disable @next/next/no-img-element */

import Flower from "./flower";

/* eslint-disable jsx-a11y/alt-text */
function Akad() {
  return (
    <section className="resepsi container">
      <Flower />
      <div className="resepsi-content">
        <div className="header">
          <p>Resepsi</p>
        </div>
        <div className="sesi">
          <p>Sesi: {"1"}</p>
        </div>
        <div className="jam">
          <p>Pukul: {"10:00 : 12:00"} WIB</p>
        </div>
        <div className="tanggal">
          <p>{"Minggu, 27 Maret 2022"}</p>
        </div>
        <div className="alamat">
          <div className="alamat-header">
            <p>Alamat:</p>
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
      </div>

      <style jsx>{`
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
        }
      `}</style>
    </section>
  );
}

export default Akad;
