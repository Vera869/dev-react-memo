import { ToolTips } from "../ToolTips/ToolTips";
import styles from "./Superpowers.module.css";

export function Epiphany({
  isAvailable,
  onClick,
  onMouseEnter,
  onMouseLeave,
  setIsEpiphanyMouseEnter,
  isAlohomoraMouseEnter,
  isAlohomoraAvailable,
  isEpiphanyMouseEnter,
  isEpiphanyAvailable,
}) {
  return isAvailable ? (
    <div
      className={isAlohomoraMouseEnter && isAlohomoraAvailable ? styles.hidden : styles.icon}
      onClick={onClick}
      onMouseEnter={() => onMouseEnter({ setIsEpiphanyMouseEnter })}
      onMouseLeave={() => onMouseLeave({ setIsEpiphanyMouseEnter })}
    >
      {isEpiphanyMouseEnter && isEpiphanyAvailable && (
        <div className={isAlohomoraAvailable ? styles.toolTipEpiphany : styles.toolTip}>
          <ToolTips
            title={"Прозрение"}
            text={"На 5 секунд показываются все карты. Таймер длительности игры на это время останавливается."}
          />
        </div>
      )}
      <svg
        // className={isAlohomoraMouseEnter && isAlohomoraAvailable ? styles.hidden : styles.icon}
        width="68"
        height="68"
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // onClick={onClick}
        // onMouseEnter={() => onMouseEnter({ setIsEpiphanyMouseEnter })}
        // onMouseLeave={() => onMouseLeave({ setIsEpiphanyMouseEnter })}
      >
        <rect width="68" height="68" rx="34" fill="#C2F5FF" />
        <path
          d="M6.06365 35.2703L6.06519 35.273C11.8167 45.1958 22.5591 51.3889 34 51.3889C45.4394 51.3889 56.1832 45.2593 61.9355 35.2718L61.9363 35.2703L62.4341 34.3992L62.5759 34.1511L62.4341 33.903L61.9364 33.0319L61.9348 33.0293C56.1833 23.1064 45.4409 16.9133 34 16.9133C22.5591 16.9133 11.8167 23.1064 6.06519 33.0293L6.06518 33.0293L6.06366 33.0319L5.56588 33.903L5.42412 34.1511L5.56588 34.3992L6.06366 35.2703L6.06365 35.2703Z"
          fill="white"
          stroke="#E4E4E4"
        />
        <mask id="mask0_3_5610" maskUnits="userSpaceOnUse" x="6" y="17" width="56" height="34">
          <path
            d="M34 50.8889C22.7378 50.8889 12.16 44.7911 6.49778 35.0222L6 34.1511L6.49778 33.28C12.16 23.5111 22.7378 17.4133 34 17.4133C45.2622 17.4133 55.84 23.5111 61.5022 33.28L62 34.1511L61.5022 35.0222C55.84 44.8533 45.2622 50.8889 34 50.8889Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_3_5610)">
          <g filter="url(#filter0_i_3_5610)">
            <path
              d="M34 50.8889C22.7378 50.8889 12.16 44.7911 6.49778 35.0222L6 34.1511L6.49778 33.28C12.16 23.5111 22.7378 17.4133 34 17.4133C45.2622 17.4133 55.84 23.5111 61.5022 33.28L62 34.1511L61.5022 35.0222C55.84 44.8533 45.2622 50.8889 34 50.8889Z"
              fill="white"
            />
          </g>
          <circle cx="34.3108" cy="26.1867" r="17.1111" fill="url(#paint0_linear_3_5610)" />
          <path
            d="M39.2891 26.3733C36.3646 26.3733 34.0002 24.0089 34.0002 21.0844C34.0002 20.0267 34.3113 18.9689 34.8713 18.16C34.5602 18.0978 34.2491 18.0978 34.0002 18.0978C29.3957 18.0978 25.7246 21.8311 25.7246 26.3733C25.7246 30.9778 29.4579 34.6489 34.0002 34.6489C38.6046 34.6489 42.2757 30.9156 42.2757 26.3733C42.2757 26.0622 42.2757 25.7511 42.2135 25.5022C41.4046 26.0622 40.4091 26.3733 39.2891 26.3733Z"
            fill="url(#paint1_linear_3_5610)"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_3_5610"
            x="6"
            y="17.4133"
            width="60"
            height="35.4756"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="2" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_5610" />
          </filter>
          <linearGradient
            id="paint0_linear_3_5610"
            x1="34.3108"
            y1="9.07556"
            x2="34.3108"
            y2="43.2978"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#004980" />
            <stop offset="1" stopColor="#C2F5FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_3_5610"
            x1="34.0002"
            y1="18.0978"
            x2="34.0002"
            y2="34.6489"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#161616" />
            <stop offset="1" stopColor="#0B004B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  ) : (
    ""
  );
}
