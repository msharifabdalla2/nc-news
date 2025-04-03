import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, updateArticleVotes } from "../../api";
import CommentsList from "./CommentsList";

function ArticlePage() {
    
    const { article_id } = useParams();

    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isVoting, setIsVoting] = useState(false);

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

    const handleVote = (incVotes) => {
        // Optimistic UI update
        const updatedArticle = {
            ...article,
            votes: article.votes + incVotes
        };
        setArticle(updatedArticle);
        setIsVoting(true)

        updateArticleVotes(article_id, incVotes)
            .then(() => {
                setIsVoting(false);
            })
            .catch((err) => {
                setError("Failed to update votes");
                setIsVoting(false);
                setArticle(article);
            });
    }

    if (isLoading) return <p>Loading article...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section>
        <article className="article-page">
            <h1>{article.title}</h1>
            <p>By {article.author} | {new Date(article.created_at).toDateString()}</p>
            <img src={article.article_img_url} alt={article.title} className="article-image" />
            <p>{article.body}</p>
            <div className="article-stats2">
                <span>👍 {article.votes} Votes</span>
                <span>💬 {article.comment_count} Comments</span>
                </div>
                <div className="vote-buttons">
                    <button onClick={() => handleVote(1)} disabled={isVoting}>Upvote</button>
                    <button onClick={() => handleVote(-1)} disabled={isVoting}>Downvote</button>
                </div>
        </article>
            <CommentsList article_id={article_id} />
        </section>
    );
}
export default ArticlePage;