export default function createGptPrompt(courseName: string, moduleName: string, className: string, question: string): string {
    return `You are an AI assistant helping a employee in the course **"${courseName}"**.
The employee is currently in **module "${moduleName}"**, attending **class "${className}"**.

The employee's question is:
**"${question}"**

📌 **Instructions:**
- Answer in the same language as the question.
- Provide a **clear and concise** response.
- Use relevant examples when necessary.
- If applicable, refer to concepts from the course.

💡 Make sure the response is easy to understand for a employee at this level.`;
}
