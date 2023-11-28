const express = require("express")
// command line version
// const readline = require("readline")
const {
  generateChatCompletion,
  generateImage,
} = require("./controllers/openAiController")

// command line version
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// rl.question("what's your web page SEO title ", (title) => {
//   generateChatCompletion(title)
//   generateImage(title)
//   rl.close()
// })

// app setup
const app = express()

app.listen(4000, () => {
  console.log("listening for request on port 4000")
})

// middleware
app.use(express.json())
app.use(express.static("public"))

// routes
app.post("/openai/chat", generateChatCompletion)
app.post("/openai/image", generateImage)
