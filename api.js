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

export { getAllArticles };

