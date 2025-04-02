import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../api";

function ArticlePage() {

    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { article_id } = useParams();

    useEffect(() => {
        getArticleById(article_id)
            .then((article) => {
                setArticle(article);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }, [article_id]);

    if (isLoading) return <p>Loading article...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <article className="article-page">
            <h1>{article.title}</h1>
            <p>By {article.author} | {new Date(article.created_at).toDateString()}</p>
            <img src={article.article_img_url} alt={article.title} className="article-image" />
            <p>{article.body}</p>
            <div className="article-stats2">
                <span>👍 {article.votes} Votes</span>
                <span>💬 {article.comment_count} Comments</span>
            </div>
        </article>
    );
}

export default ArticlePage;