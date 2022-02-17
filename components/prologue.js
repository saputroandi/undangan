/* eslint-disable @next/next/no-img-element */
function Prologue() {
  return (
    <section className="container prologue">
      <div className="prologue-image">
        <img src="/asset/Bunga.png" alt="bunga.png" />
      </div>
      <div className="prologue-content">
        <p>
          Sesungguhnya hati ini telah terhimpun dalam cinta dan bertemu dalam
          taat kepada Mu. Eratkanlah ikatannya, kekalkanlah kasih sayangnya,
          berkahilah jalannya dan penuhilah hati ini dengan cahaya Mu yang tak
          pernah pudar Rasa haru dan bahagia terukir dihati kami atas limpahan
          Rahmat Allah SWT dan kami bersimpuh memohon Ridho Nya untuk
          melangsungkan resepsi pernikahan putra – putri kami
        </p>
      </div>
      <style jsx>{`
        .prologue {
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .prologue-image > img {
          height: 8rem;
        }

        .prologue-content > p {
          text-align: center;
          padding: 2rem;
        }
      `}</style>
    </section>
  );
}
export default Prologue;
