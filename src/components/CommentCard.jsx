import { useState } from "react";
import { deleteCommentByCommentId } from "../../api";

function CommentCard({ comment, setComments }) {
    const { comment_id, votes, created_at, author, body, article_id } = comment;

    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState(null);

    const handleDelete = () => {
        setIsDeleting(true);
        deleteCommentByCommentId(comment_id)
            .then(() => {
                setComments((prevComments) => {
                    return prevComments.filter(
                        (selectedComment) => selectedComment.comment_id !== comment_id
                    );
                });
                setIsDeleting(false);
            })
            .catch(() => {
                setError("Failed to delete comment. Please try again.");
                setIsDeleting(false);
            });
    };

    return (
        <article className="comment-card">
            <p><strong>{author}</strong> | {new Date(created_at).toDateString()}</p>
            <p>{body}</p>
            <p>👍 {votes} Votes</p>

            {error && <p className="error">{error}</p>}

            {/* Only show the delete button if the comment belongs to the current user */}
            {author === 'grumpy19' && (
                <button onClick={handleDelete} disabled={isDeleting} className="delete-btn">
                    {isDeleting ? "Deleting..." : "Delete"}
                </button>
            )}
        </article>
    );
}

export default CommentCard;