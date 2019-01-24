import React from 'react'
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby'

const StyledBlogContainer = styled.div`
  display: flex;
  flex-direction: columm;
  margin: 5rem;
  border: 1px solid white;
  color: white;
`

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(limit: 5, sort: {
      order: DESC,
      fields: [frontmatter___date]
    }) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`


const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render ={({allMarkdownRemark}) => {
      return (
        <StyledBlogContainer>
          <h2>Archive</h2>  
          {allMarkdownRemark.edges.map((edge) => {
            return (
              <li><a href={`/posts${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</a></li>
            )
          })}
        </StyledBlogContainer>
      )      
    }}
  />
)


export default Archive