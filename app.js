const readline = require("readline")
const { generateChatCompletion } = require("./controllers/openAiController")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question("what's your web page SEO title ", (title) => {
  generateChatCompletion(title)
  rl.close()
})
