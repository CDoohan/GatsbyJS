import styled from 'styled-components'
import Img from 'gatsby-image'
import media from 'styled-media-query'

import * as V from '../../styles/variables'

export const Logo = styled(Img).attrs({
  alt: 'DBueno Marketing Digital',
  'aria-label': 'DBueno Marketing Digital'
})`
  display: block;
  height: 58px;
  object-fit: cover;
  width: 270px;
  ${media.greaterThan('medium')`
    height: 58px;
    width: 270px;
  `}
`