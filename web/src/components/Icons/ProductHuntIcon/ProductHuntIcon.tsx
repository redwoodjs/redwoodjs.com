import type { FC } from 'react'

import { IconProps } from '../types'

const ProductHuntIcon: FC<IconProps> = (p) => {
  return (
    <svg {...p}>
      <path d="M10.2 12H13.6002C14.0776 12 14.5354 11.8104 14.873 11.4728C15.2106 11.1352 15.4002 10.6774 15.4002 10.2C15.4002 9.72261 15.2106 9.26477 14.873 8.92721C14.5354 8.58964 14.0776 8.4 13.6002 8.4H10.2V12Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24C18.6276 24 24 18.6276 24 12C24 5.3724 18.6276 0 12 0C5.3724 0 0 5.3724 0 12C0 18.6276 5.3724 24 12 24ZM7.8 6H13.6002C14.7141 6 15.7824 6.4425 16.57 7.23015C17.3577 8.0178 17.8002 9.08609 17.8002 10.2C17.8002 11.3139 17.3577 12.3822 16.57 13.1698C15.7824 13.9575 14.7141 14.4 13.6002 14.4H10.2V18H7.8V6Z"
      />
    </svg>
  )
}

ProductHuntIcon.displayName = 'ProductHuntIcon'
ProductHuntIcon.defaultProps = {
  fill: 'currentColor',
  height: '24',
  width: '24',
  viewBox: '0 0 24 24',
  xmlns: 'http://www.w3.org/2000/svg',
}

export default ProductHuntIcon
