# Ask Islam - Islamic Knowledge Assistant

![Ask Islam](https://img.shields.io/badge/Ask_Islam-Islamic_Knowledge_Assistant-emerald)

Ask Islam is an AI-powered Islamic knowledge assistant built with Next.js and Vercel AI SDK. This application provides answers to questions about Islamic beliefs, practices, history, the Quran, Hadith, and more.

## ✨ Features

- **Islamic Knowledge Base**: Answers questions about the Quran, Hadith, Islamic history, practices, beliefs, and more
- **Source Citations**: Provides references to Quranic verses and authentic Hadith collections
- **Multiple Perspectives**: Acknowledges different scholarly opinions on complex topics
- **Interactive UI**: Clean, modern interface with a focus on user experience
- **Suggested Questions**: Built-in suggested questions to help users get started
- **Artifact Creation**: Generate and export educational content about Islamic topics

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **AI**: [Vercel AI SDK](https://sdk.vercel.ai/docs)
- **UI**: [Tailwind CSS](https://tailwindcss.com/) & [Radix UI](https://www.radix-ui.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Database**: [Vercel Postgres](https://vercel.com/storage/postgres)
- **Hosting**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm
- OpenAI API key
- Vercel account (for deployment)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ask-islam.git
cd ask-islam
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Create a `.env` file in the root directory with the following variables:

```
AUTH_SECRET=your-auth-secret
OPENAI_API_KEY=your-openai-api-key
POSTGRES_URL=your-postgres-url
```

4. Run the development server:

```bash
npm run dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🧠 How It Works

Ask Islam uses advanced AI models (GPT-4o) with specialized prompt engineering to provide accurate and respectful information about Islamic topics. The system is designed to:

1. Understand questions about various Islamic subjects
2. Provide factual information based on authentic sources
3. Cite references from the Quran and Hadith collections
4. Acknowledge different scholarly interpretations when appropriate
5. Respond with cultural sensitivity and respect

### 🔮 Future Model Development

**Coming Soon**: We are developing a custom-made AI model specifically fine-tuned for Islamic knowledge. This specialized model will be trained on authentic Islamic texts, including the Quran, Hadith collections, and scholarly works, to provide even more accurate and nuanced responses on Islamic topics.

## 📝 Usage Examples

Here are some example questions you can ask:

- "What are the five pillars of Islam?"
- "Explain the concept of Tawhid in Islam"
- "What is the significance of Ramadan in Islam?"
- "How to perform Salah (prayer) in Islam?"
- "What does the Quran say about patience?"
- "Who was Imam Al-Bukhari?"
- "What is the difference between Sunni and Shia Islam?"

## ⚠️ Limitations

- This is an educational tool and not a substitute for consulting with qualified Islamic scholars for religious rulings (fatwas) or personal spiritual guidance.
- The AI may not have knowledge of very recent events or obscure topics.
- While efforts are made to ensure accuracy, users should verify information with authentic Islamic sources.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve Ask Islam, please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

If you have any questions or feedback, please reach out to us at [your-email@example.com].

---

**Disclaimer**: This application is designed for educational purposes only. Users should consult qualified Islamic scholars for religious rulings (fatwas) and personal spiritual guidance.
