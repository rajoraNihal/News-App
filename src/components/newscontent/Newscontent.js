import { Container } from "@mui/material";
import React from "react";
import "./Newscontent.css";
import NewsCard from "../Newscard/NewsCard";

const Newscontent = ({ newsArray, newsResults, loadmore, setLoadmore }) => {
  return (
    <Container maxWidth="md">
      <div>
        <div className="downloadMessage">
          <span className="downloadText">
            For Best Experience Use News App on your smartphone
          </span>
          <img
            alt="app store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
          />
          <img
            alt="play store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
          />
        </div>
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
        {loadmore <= newsResults && (
          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => setLoadmore(loadmore + 20)}
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default Newscontent;
