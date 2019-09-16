import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { MenuNav } from '../Menu/style'

import links from './links'

const Menu = () => {
    return (
        <MenuNav>
            {links.map((link, i) => (
            <AniLink
                partiallyActive={true}
                key={i}
                cover
                direction="down" 
                duration={1}
                to={link.url}
                onClick={() => console.log(link.label)}
                activeClassName="active">
                {link.label}
            </AniLink>
            ))}
        </MenuNav>
    )
}

export default Menu