import gql from 'graphql-tag'

const PORTFOLIO_QUERY = gql `
  {  
    portfolioPieces {
      id
      Name
      Link
      Description
    }
  }
`

export default PORTFOLIO_QUERY