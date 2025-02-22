import React, { useState } from "react";
import axios from "axios";

const App = () => {
    const [recommendation, setRecommendation] = useState("");

    const getRecommendation = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:5000/api/recommend", {});
            setRecommendation(response.data.recommended_goal);
        } catch (error) {
            console.error("Error fetching recommendation:", error);
        }
    };

    return (
        <div>
            <h1>TaskHive AI Recommendations</h1>
            <button onClick={getRecommendation}>Get AI Recommendation</button>
            {recommendation && <p>Recommended Goal: {recommendation}</p>}
        </div>
    );
};

export default App;
