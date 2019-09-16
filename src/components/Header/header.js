import PropTypes from "prop-types"
import React from "react"

import Logo from '../Logo/logo';
import Menu from '../Menu/menu';

import { HeaderBox, Box, LogoBox, MenuBox } from './style';

const Header = ({ siteTitle }) => (

  <HeaderBox>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1280,
      }}
    >
      <Box>
        <LogoBox>
          <Logo />
        </LogoBox>
        <MenuBox>
          <Menu />
        </MenuBox>
      </Box>
    </div>
    
  </HeaderBox>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
