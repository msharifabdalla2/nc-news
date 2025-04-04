import { useEffect, useState } from "react";
import { getAllTopics } from "../../api";
import TopicCard from "./TopicCard";

function Topics() {
    const [allTopics, setAllTopics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllTopics()
            .then((topics) => {
                setAllTopics(topics);
                setLoading(false);
            });
    }, [])

    return (
        <div>
            {loading ? <p>Items Loading...</p> :
            <TopicCard topics={allTopics} />
            }
        </div>
    )
}

export default Topics;