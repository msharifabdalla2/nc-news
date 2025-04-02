import axios from 'axios';

const api = axios.create({ baseURL: 'https://be-nc-news-i5ax.onrender.com/api' });

function getAllArticles() {
    return api.get('/articles')
        .then(({ data }) => {
            return data.articles
        })
        .catch((err) => {
            console.error("Error fetching articles: ", err);
        });
};

function getArticleById(articleByIdQuery) {
    return api.get(`/articles/${articleByIdQuery}`)
        .then(({ data }) => {
        return data.article
        })
        .catch((err) => {
            console.error("Error fetching article: ", err);
        });
}

export { getAllArticles, getArticleById };

