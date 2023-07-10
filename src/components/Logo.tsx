const Logo = ({ size }: { size?: string }) => {
  return (
    <div>
      <svg
        width={size || "206"}
        height="auto"
        viewBox="0 0 206 219"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.00001 14.5V138C0.742508 144.618 3.4464 154.571 5.50001 156.5L60.5 212.5C62.6033 214.646 71.5 218.5 78 219H106.5C180 211.5 202.5 157 205 124.5C205.885 113 206.226 106.52 205 95C193 19 134.5 1.5 100.5 0H16.5C5.30001 2.4 1.66668 10 1.00001 14.5Z"
          fill="url(#paint0_linear_359_22)"
        />
        <rect
          x="96"
          y="153"
          width="40"
          height="19"
          rx="9.5"
          className="dark:fill-[#161C2C] fill-white"
        />
        <rect
          x="42"
          y="117"
          width="115"
          height="19"
          rx="9.5"
          className="dark:fill-[#161C2C] fill-white"
        />
        <rect
          x="42"
          y="81"
          width="115"
          height="19"
          rx="9.5"
          className="dark:fill-[#161C2C] fill-white"
        />
        <rect
          x="42"
          y="44"
          width="90"
          height="19"
          rx="9.5"
          className="dark:fill-[#161C2C] fill-white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_359_22"
            x1="103"
            y1="0"
            x2="103"
            y2="219"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#55CBF1" />
            <stop offset="1" stop-color="#2E9CDB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
