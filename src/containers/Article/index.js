import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import Moment from "react-moment";
import NotFound from "../../components/404/404";
import Disqus from "disqus-react";
import ARTICLE_QUERY from "../../queries/article/article";

const Article = () => {
  let { id } = useParams();

  const renderers = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter
          style={okaidia}
          language={language}
          children={value}
        />
      );
    },
  };

  const disqusShortname = "djustus";
  const disqusConfig = {
    url: process.env.REACT_APP_FRONTEND_URL,
    identifier: id,
  };

  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: { article } }) => {
        if (article === null) {
          return <NotFound />;
        } else {
          return (
            <div className="page-content">
              <>
                <h1 id="article-page-title">{article.Title}</h1>
                <img
                  className="article-hero"
                  src={article.Image[0].url}
                  alt={article.Alt}
                />
                <div className="uk-section">
                  <div className="uk-container uk-container-small">
                    <ReactMarkdown
                      source={article.Content}
                      renderers={renderers}
                    />
                    <p className="article-date">
                      <Moment format="MMM Do YYYY">
                        {article.published_at}
                      </Moment>
                    </p>
                    <Disqus.DiscussionEmbed
                      shortname={disqusShortname}
                      config={{ title: article.Title, ...disqusConfig }}
                    />
                  </div>
                </div>
              </>
            </div>
          );
        }
      }}
    </Query>
  );
};

export default Article;
