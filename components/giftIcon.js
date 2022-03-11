function GiftIcon(props) {
  return (
    <div className="gift-icon">
      <div
        className="gift-icon-wrapper"
        onClick={() => props.setDisplayRekening(true)}
      >
        <svg
          version={1.0}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128.000000 128.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M203 1266 c-36 -16 -56 -43 -78 -105 -18 -51 -21 -88 -11 -118 7 -21
4 -22 -51 -25 l-58 -3 0 -85 c0 -69 3 -85 15 -85 12 0 16 15 18 68 l3 67 71 0
c60 0 211 -31 227 -46 2 -2 -16 -42 -40 -89 l-44 -85 -106 0 c-100 0 -107 1
-112 21 -9 33 -32 17 -32 -22 0 -33 1 -34 42 -37 l43 -3 2 -357 3 -357 545 0
545 0 0 70 c0 56 -3 70 -15 70 -11 0 -16 -14 -18 -52 l-3 -53 -195 0 -194 0 1
328 1 327 30 -65 c17 -36 42 -112 57 -169 14 -58 31 -106 38 -108 6 -2 30 23
53 56 22 34 43 61 46 61 3 0 32 -21 65 -47 79 -62 89 -53 65 59 -10 46 -29
116 -42 156 -13 40 -24 75 -24 77 0 3 22 5 50 5 l50 0 2 -262 c3 -226 5 -263
18 -263 13 0 15 37 18 262 l2 262 43 3 42 3 0 145 0 145 -58 3 c-55 3 -58 4
-51 25 18 54 -22 176 -69 211 -43 32 -83 25 -215 -38 l-122 -58 -120 0 -120 0
-118 55 c-139 66 -157 71 -199 53z m190 -91 c102 -48 117 -59 117 -80 l0 -24
-72 34 c-119 56 -207 65 -244 24 -27 -30 -4 -45 37 -24 42 22 98 11 204 -42
l75 -37 0 -47 0 -47 -102 27 c-216 59 -228 63 -249 89 -21 27 -20 35 12 118
21 53 49 76 84 69 11 -2 73 -29 138 -60z m671 54 c16 -8 32 -30 45 -63 32 -83
33 -91 12 -118 -21 -26 -33 -30 -248 -89 l-103 -27 0 48 0 49 75 36 c109 51
162 62 204 40 44 -22 66 -5 33 27 -40 41 -127 27 -300 -49 -10 -4 -13 1 -10
17 2 18 28 34 128 81 69 32 128 59 132 59 4 0 18 -5 32 -11z m-339 -224 l0
-110 -85 0 -85 0 -3 99 c-1 55 0 106 2 113 4 11 26 13 88 11 l83 -3 0 -110z
m515 -135 l0 -110 -107 0 -108 0 -44 85 c-24 47 -42 87 -40 89 17 16 157 45
222 45 l77 1 0 -110z m-780 34 c54 -16 99 -42 100 -57 0 -5 -13 -27 -29 -50
-55 -81 -110 -211 -142 -336 l-11 -45 -30 52 c-16 29 -37 52 -45 52 -8 0 -33
-14 -55 -31 -21 -17 -41 -29 -45 -26 -9 9 45 186 83 270 46 101 96 187 110
187 6 0 35 -7 64 -16z m467 -39 c17 -29 47 -89 67 -132 38 -84 92 -261 83
-270 -4 -3 -24 9 -45 26 -22 17 -47 31 -55 31 -8 0 -29 -23 -45 -52 l-30 -52
-11 45 c-32 125 -87 255 -142 336 -16 23 -29 45 -29 50 1 21 110 70 160 72 8
0 29 -24 47 -54z m-233 -55 c14 -22 26 -42 26 -45 0 -3 -36 -5 -80 -5 -44 0
-80 2 -80 5 0 3 12 23 26 45 20 30 33 40 54 40 21 0 34 -10 54 -40z m-464 -95
c0 -2 -11 -37 -24 -77 -13 -40 -32 -110 -42 -156 -24 -112 -14 -121 65 -59 33
26 62 47 65 47 3 0 24 -27 46 -61 23 -33 47 -58 53 -56 7 2 24 50 38 108 15
57 40 133 57 169 l30 65 1 -327 1 -328 -195 0 -195 0 0 340 0 340 50 0 c28 0
50 -2 50 -5z m490 -335 l0 -340 -80 0 -80 0 0 340 0 340 80 0 80 0 0 -340z"
            />
          </g>
        </svg>
      </div>

      <style jsx>{`
        .gift-icon {
          position: fixed;
          bottom: 0;
          right: 0;
          width: 100%;
          z-index: 35;
          display: flex;
          justify-content: end;
          margin: 0 1rem 11rem 0;
        }

        .gift-icon-wrapper {
          width: 2.75rem;
          height: 2.75rem;
          display: flex;
          justify-content: center;
          background-color: rgba(254, 251, 243, 0.85);
          border: 2px solid rgb(102, 51, 0);
          padding: 0.35rem;
          border-radius: 0.5rem;
          animation: gifticon 1.5s linear 0s infinite alternate;
        }

        @keyframes gifticon {
          0% {
            transform: rotate(-15deg);
          }
          100% {
            transform: rotate(15deg);
          }
        }
      `}</style>
    </div>
  );
}

export default GiftIcon;
