const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

const users = [];

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        data.forEach(({ name, email }) => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            header.textContent = name
            body.textContent = email
            userCardContainer.append(card)
            users.push({ name, email, element: card })
        })
    })

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    console.log(value)
    users.forEach(user => {
        const isVisible =
            user.name.toLowerCase().includes(value) ||
            user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hidden", !isVisible)
    })
})
document.querySelector("#sbtn").addEventListener("click", (e) => {
    e.preventDefault()
})
