import { useEffect, useState } from "react";
import { getAllArticles } from "../../api";
import ArticleCard from "./ArticleCard";

function Articles() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllArticles()
            .then((articles) => {
            setArticles(articles);
            setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }, []);



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