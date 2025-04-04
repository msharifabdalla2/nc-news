import axios from 'axios';

const api = axios.create({ baseURL: 'https://be-nc-news-i5ax.onrender.com/api' });

function getAllArticles() {
    return api.get('/articles')
        .then(({ data }) => {
            return data.articles;
        })
        .catch((err) => {
            console.error("Error fetching articles: ", err);
        });
};

function getArticleById(articleByIdQuery) {
    return api.get(`/articles/${articleByIdQuery}`)
        .then(({ data }) => {
            return data.article;
        })
        .catch((err) => {
            console.error("Error fetching article: ", err);
        });
}

function getCommentsByArticleId(articleByIdQuery) {
    return api.get(`/articles/${articleByIdQuery}/comments`)
        .then(({ data }) => {
            return data.comments;
        })
        .catch((err) => {
            console.error("Error fetching comments: ", err);
        });
}

function updateArticleVotes(articleByIdQuery, inc_votes) {
    return api.patch(`/articles/${articleByIdQuery}`, { inc_votes })
        .then(({ data }) => {
            return data.article;
        })
        .catch((err) => {
            console.error("Error updating votes:", err);
            throw err;
        });
}

function postNewCommentByArticleId(articleByIdQuery, articleData) {
    return api.post(`/articles/${articleByIdQuery}/comments`, articleData)
        .then(({ data }) => {
            console.log(data.comment)
            return data.comment;
        })
        .catch((err) => {
            console.error("Error posting comment on article", err);
            throw err;
        });
}

function deleteCommentByCommentId(comment_id) {
    return api.delete(`/comments/${comment_id}`)
        .then(({ data }) => {
            console.log("Comment deleted successfully", data);
            return data;
        })
        .catch((err) => {
            console.error("Error deleting comment:", err)
        });
}

// function deleteUserItem(item_id) {
//     return api.delete(`/users/Ant/items/${item_id}`)
//         .then(({ data }) => {
//             console.log("Item deleted successfully", data);
//             return data;
//         })
//         .catch((error) => {
//             console.error("Error deleting item:", error)
//         });
// }

export { getAllArticles, getArticleById, getCommentsByArticleId, updateArticleVotes, postNewCommentByArticleId, deleteCommentByCommentId };

