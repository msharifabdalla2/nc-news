import { useEffect, useState } from "react";
import { getAllArticles } from "../../api";
import ArticleCard from "./ArticleCard";
import { useSearchParams } from "react-router-dom";

function Articles() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const topicNameQuery = searchParams.get("topic");
    const sortByQuery = searchParams.get("sort_by") 
    const orderByQuery = searchParams.get("order")

    // useEffect(() => {
    //     if (topicNameQuery) {
    //         getAllArticles(topicNameQuery)
    //             .then((articlesByTopic) => {
    //                 setArticles(articlesByTopic);
    //                 setIsLoading(false);
    //             })
    //             .catch((err) => {
    //                 setError(err.message);
    //                 setIsLoading(false);
    //             });
    //     } else {
    //         getAllArticles()
    //             .then((articles) => {
    //             setArticles(articles);
    //             setIsLoading(false);
    //             })
    //             .catch((err) => {
    //                 setError(err.message);
    //                 setIsLoading(false);
    //             });
    //     }
    // }, [topicNameQuery ? topicNameQuery: '']);


    useEffect(() => {
        setIsLoading(true);
        setError(null); 

        getAllArticles(topicNameQuery, sortByQuery, orderByQuery)
            .then((fetchedArticles) => {
                setArticles(fetchedArticles);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    
    }, [topicNameQuery, orderByQuery, sortByQuery]);
    


    if (isLoading) return <p>Loading articles...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className="articles-list">
            {articles.map((article) => (
                <ArticleCard key={article.article_id} article={article} />
            ))}
        </section>
    );
}

export default Articles;