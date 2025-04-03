function CommentCard({ comment }) {
    const { comment_id, votes, created_at, author, body, article_id } = comment;

    return (
        <article className="comment-card">
            <p><strong>{author}</strong> | {new Date(created_at).toDateString()}</p>
            <p>{body}</p>
            <p>👍 {votes} Votes</p>
        </article>
    );
}

export default CommentCard;