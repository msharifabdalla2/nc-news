import { Link } from "react-router-dom";

function ArticleCard({ article }) {
    const { article_id, title, topic, author, created_at, votes, comment_count, article_img_url } = article;

    return (
        <article className="article-card">
            <img src={article_img_url} alt={title} className="article-image" />
            <div className="article-info">
                <h2><Link to={`/articles/${article_id}`}>{title}</Link></h2>
                <p>Topic: {topic} | Author: {author}</p>
                <p>Published: {created_at}</p>
                <div className="article-stats">
                    <span>👍 {votes} Votes</span>
                    <span>💬 {comment_count} Comments</span>
                </div>
            </div>
        </article>
    );
}

export default ArticleCard;