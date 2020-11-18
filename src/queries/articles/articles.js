import gql from "graphql-tag"

const ARTICLES_QUERY = gql `
  query Articles {
    articles {
      id
      Title
      Alt
      category {
        id
        Name
      }
      Image {
        url
      }
    }
  }
`

export default ARTICLES_QUERY