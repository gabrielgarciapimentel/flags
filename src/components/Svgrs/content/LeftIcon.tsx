import * as React from "react"
import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M6 16a1 1 0 0 1 .298-.712l8.105-8a1 1 0 1 1 1.405 1.424L9.437 15H25a1 1 0 0 1 0 2H9.437l6.371 6.288a1 1 0 0 1-1.405 1.424l-8.105-8A1 1 0 0 1 6 16Z"
      clipRule="evenodd"
    />
  </svg>
)
export const LeftIcon = memo(SvgComponent)
