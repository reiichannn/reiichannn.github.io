import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styles from "../styles/image.module.css"

const Image = ({ fileName, alt, style }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 2000, quality: 100) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const fluid = allImageSharp.nodes.find(n => n.fluid.originalName === fileName)
    .fluid

  return (
    <figure>
      <Img fluid={fluid} alt={alt} style={style} />
    </figure>
  )
}

export default Image;