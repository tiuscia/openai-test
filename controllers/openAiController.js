const openai = require("../config/openAiConfig")

const generateChatCompletion = async (title) => {
  const chatCompletionDescription = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Come up with a meta description of 160 chars max, for a webpage called ${title}`,
      },
    ],
    max_tokens: 100,
  })
  console.log(chatCompletionDescription.choices[0].message)
  const chatCompletionKw = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Come up 10 seo keywords, for a webpage called ${title}`,
      },
    ],
    max_tokens: 100,
  })
  console.log(chatCompletionKw.choices[0].message)
}

module.exports = { generateChatCompletion }
