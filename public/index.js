//forms
const createDescriptionForm = document.querySelector(".form-description")

// output
const generatedDescriptionHtml = document.querySelector(
  ".generated-description"
)
const generatedKWHtml = document.querySelector(".generated-keywords")

createDescriptionForm.addEventListener("submit", async (e) => {
  // prevent page refresh on submit
  e.preventDefault()
  console.log("submit button clicked")

  generatedDescriptionHtml.textContent = "loading..."
  generatedKWHtml.textContent = "loading..."

  const res = await fetch("/openai/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: createDescriptionForm.title.value }),
  })
  const data = await res.json()
  console.log("data", data)

  generatedDescriptionHtml.textContent = data?.description?.content
  generatedKWHtml.textContent = data?.keywords?.content
})

// todo create form to generate OG image
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
