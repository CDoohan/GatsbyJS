import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './style'

const Logo = () => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "logoDbueno.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 270, quality: 60){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <S.Logo fluid={image.childImageSharp.fluid} />
}

export default Logo