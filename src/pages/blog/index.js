import React from "react"
import PostLink from "../../components/post-link"
import { graphql } from 'gatsby'

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
    marginBottom: 96,
    paddingLeft: 0,
  }
  const listItemStyles = {
    fontWeight: 300,
    fontSize: 24,
    maxWidth: 560,
    marginBottom: 30,
  }
  
const BlogIndex = ({
    data: {
      allMarkdownRemark: { edges },
    },
  }) => {
    const Posts = edges
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <li style={listItemStyles}><PostLink key={edge.node.id} post={edge.node} /></li>)
      
    return (
        <main style={pageStyles}>
        <h1 style={headingStyles}>
            Dis be ma "blog".
            <br />
            <span style={headingAccentStyles}></span>
        </h1>
        <p style={paragraphStyles}>
            Dis blog be regardin all kinds o' stuff. Don't be bitchin 'bout ma bootiful blog.
            If'n ya does, y'all can go <code style={codeStyles}>take a hike.</code>  😎
        </p>
        <h1 style={headingStyles}>
            Blogposts
            <br />
            <span style={headingAccentStyles}></span>
        </h1>
        
        <ul style={listStyles}>
        {Posts}
        </ul>
        </main>
    )
}

export default BlogIndex

export const Head = () => <title>Paul's Crazy Blog</title>

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC }}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }`