import gql from "graphql-tag"

const ARTICLE_QUERY = gql`  
  query Articles($id: ID!) {
    article(id: $id) {
    id
    Title
    Content
    Alt
    Image {
      url
    }
    category {
      id
      Name
    }
    published_at
    }
  }
`

export default ARTICLE_QUERY