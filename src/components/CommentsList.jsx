import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../../api";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

function CommentsList({ article_id }) {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCommentsByArticleId(article_id)
            .then((fetchedComments) => {
                setComments(fetchedComments);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }, [article_id]);

    if (isLoading) return <p>Loading comments...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className="comments-list">
            {comments.length === 0 ? (
                <p>No comments yet.</p>
            ) : (
                comments.map((comment) => (
                    <CommentCard key={comment.comment_id} comment={comment} setComments={setComments} />
                ))
            )}
            <CommentForm article_id={article_id} setComments={setComments} />
        </section>
    );
}

export default CommentsList;