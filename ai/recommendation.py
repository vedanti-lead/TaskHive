import numpy as np
import pandas as pd
from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample AI model for goal recommendations
def recommend_goals(user_data):
    goals = ["Complete 5 tasks", "Join a mentorship session", "Earn 100 merit points"]
    return np.random.choice(goals)

@app.route('/recommend', methods=['POST'])
def recommend():
    user_data = request.get_json()
    recommended_goal = recommend_goals(user_data)
    return jsonify({"recommended_goal": recommended_goal})

if __name__ == '__main__':
    app.run(port=5001, debug=True)
