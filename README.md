# 🐝 TaskHive

**TaskHive** is a smart productivity and emotional wellness dashboard that helps users stay organized while being emotionally aware. Unlike traditional task managers, TaskHive combines **task tracking**, **journaling**, **sentiment analysis**, and **reinforcement learning** to build a personalized productivity experience.

---

## 🚀 Features

- ✅ **Smart Task Manager** – Create, edit, delete, and complete daily tasks in an intuitive interface.
- 🧠 **Sentiment-Aware Journaling** – Users can write journal entries; the app detects their mood (positive, negative, or neutral).
- 🤖 **AI-Driven Recommendations** – Using reinforcement learning, TaskHive learns which types of tasks should be prioritized.
- 🔍 **Real-time Feedback** – Displays motivational suggestions and emotional insights based on journal sentiment.
- 📊 **Keyword Extraction** – Extracts up to 5 main keywords from the journal to provide deeper personal insights.

---

## 🧠 AI Modules Used

### 1. **VADER Sentiment Analysis (NLP)**
- A rule-based natural language processing tool.
- Uses a pre-trained lexicon to classify journal text into:
  - **Positive**, **Negative**, or **Neutral**
- Outputs a **compound score** between -1 and +1.
- Ideal for short, casual text like user journals.

### 2. **Reinforcement Learning (Q-Learning)**
- Learns from user’s task completion behavior and mood.
- Suggests the most rewarding next task.
- Helps users stay productive even when their mood fluctuates.

---

## 🛠️ Tech Stack

| Layer        | Technology                             |
|--------------|------------------------------------------|
| Frontend     | React.js, Vite, TypeScript, Tailwind CSS |
| Backend      | Node.js, Express.js                      |
| AI Modules   | VADER Sentiment, Q-Learning (custom logic)|
| API Comm     | Axios, REST API                          |
| Database     | MongoDB / PostgreSQL (configurable)      |
| State Mgmt   | React Context API                        |

---

## 📈 Workflow

```text
1. User writes a journal → Frontend sends text to backend
2. Backend runs VADER sentiment analysis → returns mood & score
3. RL agent processes mood + past task data → suggests optimized task
4. Frontend shows sentiment result, motivational quote, and tasks

## Folder Structure

📦 TaskHive/
 ┣ 📂 frontend/
 ┃ ┣ 📂 components/
 ┃ ┃ ┗ 📜 TaskCard.tsx
 ┃ ┣ 📂 context/
 ┃ ┃ ┗ 📜 SentimentProvider.tsx
 ┃ ┗ 📜 App.tsx
 ┣ 📂 backend/
 ┃ ┣ 📜 server.js
 ┃ ┣ 📜 sentimentRoute.js
 ┃ ┗ 📜 rlAgent.js
 ┗ 📜 README.md
