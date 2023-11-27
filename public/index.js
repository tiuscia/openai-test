//forms
const createDescriptionForm = document.querySelector(".form-description")

// output
const generatedDescriptionHtml = document.querySelector(
  ".generated-description"
)
// const title
// const image

createDescriptionForm.addEventListener("submit", async (e) => {
  // prevent page refresh on submit
  e.preventDefault()
  console.log("submit button clicked")

  const res = await fetch("/openai/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: createDescriptionForm.title.value }),
  })
  const data = await res.json()

  console.log("data", data)

  generatedDescriptionHtml.textContent = data.description.content
})

// createImageForm.addEventListener("submit", async (e) => {
//   // prevent page refresh on submit
//   e.preventDefault()

//   const res = await fetch("/openai/chat", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ prompt: createImageForm.prompt.value }),
//   })
//   const data = await res.json()

//   console.log("data", data)

//   generatedDescriptionHtml.setAttribute('src', data.url)
// })
