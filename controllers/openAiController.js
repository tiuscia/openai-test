const openai = require("../config/openAiConfig")

const generateChatCompletion = async (req, res) => {
  const { title } = req.body

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
        content: `Come up with 10 seo keywords, for a webpage called ${title}`,
      },
    ],
    max_tokens: 100,
  })
  console.log(chatCompletionKw.choices[0].message)

  res.status(200).json({
    description: chatCompletionDescription.choices[0].message,
    keywords: chatCompletionKw.choices[0].message,
  })
}

const generateImage = async (req, res) => {
  const image = await openai.images.generate({
    model: "dall-e-3",
    prompt: req.body.prompt,
    n: 1,
    size: "1024x1024",
  })
  console.log(image.data.url)
  res.status(200).json({
    url: image.data.url,
  })
}

module.exports = { generateChatCompletion, generateImage }
