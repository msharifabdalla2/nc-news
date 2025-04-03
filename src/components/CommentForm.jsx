import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postNewCommentByArticleId } from "../../api";

function CommentForm({ article_id, setComments }) {
    const [formData, setFormData] = useState({
        username: '',
        body: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        setError(null);
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        postNewCommentByArticleId(article_id, formData)
            .then((newComment) => {
                setFormData({ username: '', body: '' });
                setIsSubmitting(false);
                setComments((prevComments) => [newComment, ...prevComments]);
            }).catch((err) => {
                setError("Failed to add comment. Please try again!")
                setIsSubmitting(false)
                console.error(err);
            });
    }

    return (
        <div className="comment-form-container">
            <h2>Upload your comment</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Author</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="body">Comment</label>
                    <textarea
                        name="body"
                        id="body"
                        value={formData.body}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Posting..." : "Post Comment"}
                </button>
            </form>
        </div>
    );   
}

export default CommentForm;