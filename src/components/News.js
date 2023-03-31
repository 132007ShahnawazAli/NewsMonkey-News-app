import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalArticles, setTotalArticles] = useState(0);

    useEffect(() => {
        updateNews();
    }, []);

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json(data);
        setArticles(articles.concat(parsedData.articles));
        setPage(page + 1);
    };

    const updateNews = async () => {
        props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json(data);
        setArticles(parsedData.articles);
        setTotalArticles(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    };

    return (
        <>
            <div className="container my-4">
                <h1 className="text-center my-5">{`NewsMonkey - Top ${capitalizeFirstLetter(props.category)} Headlines `}</h1> {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={() => fetchMoreData()}
                    hasMore={articles.length < totalArticles && !loading}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {!loading &&
                                articles.map((article) => {
                                    return (
                                        <div className="col-md-4" key={article.url}>
                                            <NewsItem
                                                title={article.title}
                                                description={article.description}
                                                imageURL={article.urlToImage}
                                                newsURL={article.url}
                                                author={article.author}
                                                date={article.publishedAt}
                                                sourceName={article.source.name}
                                            />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        </>
    );
}

News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};

export default News;
