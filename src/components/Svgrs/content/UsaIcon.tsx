import * as React from "react"
import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={60}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path fill="#BD3D44" d="M0 0h80v60H0" />
      <path
        fill="#000"
        d="M0 6.913h80Zm0 9.212h80Zm0 9.25h80Zm0 9.25h80Zm0 9.25h80Zm0 9.25h80Z"
      />
      <path
        stroke="#fff"
        strokeWidth={4.625}
        d="M0 6.913h80M0 16.125h80m-80 9.25h80m-80 9.25h80m-80 9.25h80m-80 9.25h80"
      />
      <path fill="#192F5D" d="M0 0h45.6v32.313H0" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h80v60H0z" />
      </clipPath>
    </defs>
  </svg>
)
export const UsaIcon = memo(SvgComponent);
