import { Link } from "react-router-dom";

function TopicCard({ topics }) {
    return (
        <div className="topics-grid">
            {topics.map((topic) => (
                <div key={topic.slug} className="topic-card">
                    <div className="topic-details">
                        <Link to={`/articles?topic=${topic.slug}`}>
                            <h3>{topic.slug}</h3>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TopicCard;