import gql from 'graphql-tag'

const PORTFOLIO_QUERY = gql `
  {  
    portfolioPieces {
      id
      Name
      Link
      Image {
        url
      }
      Description
    }
  }
`

export default PORTFOLIO_QUERY