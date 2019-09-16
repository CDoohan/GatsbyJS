import styled from 'styled-components';
import media from 'styled-media-query'

import * as V from '../../styles/variables'

export const HeaderBox = styled.header`
    background-color: ${V.Color.black};
    color: ${V.Color.white};
    display: block;
    left: 0;
    position: fixed;
    right: 0;
    text-transform: lowercase;
    top: 0;
    transition: background-color .3s;
    width: 100%;
    will-change: background-color;
    z-index: ${V.ZIndex.header};
    ${media.greaterThan('medium')`
    background-color: ${V.Color.black};
    `}
`

export const Box = styled.div`
    display:flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items:center;
`

export const LogoBox = styled.div`
    display:block;
`

export const MenuBox = styled.div`
    display:block;
`
