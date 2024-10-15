console.log("HOla")

// if (age > 18) {
//     console.log("HOla")
// }

const listClass = ["purple", "orange", "blue", "green"]



let body = document.body


let h1 = document.querySelector("h1")
h1.style.color = "red"
console.log(h1)


let nav = document.querySelector("[name='myName']")
console.log(nav)

let h2 = document.createElement("h2")
h2.textContent = "<h1>Hola ¿qué tal?</h1>"
body.appendChild(h2)


let navList = document.querySelector("#navList")
navList.children[1].style.color = "green"
console.log(navList)

let ulListNumber = document.createElement("ul")
// body.appendChild(ulListNumber)
body.insertBefore(ulListNumber, body.children[1])

console.log(body.children)
// list.insertBefore(newItem, list.childNodes[0]);

let li = document.createElement("li")
for (let index = 0; index <= 20; index++) {
    li.textContent = index
    if (index % 2 == 0) {
        // li.style.backgroundColor = "green"
        // li.style.color = "white"
        // li.classList.add("bg-color")

        let myInterval = setInterval(() => {
            let numRandom = Math.floor(Math.random() * listClass.length)
            li.classList.add(`bg-${listClass[numRandom]}`)
        }, 1000)

        li.style.color = "white"
    }
    ulListNumber.appendChild(li)
    console.log(index)
}

ulListNumber.removeChild(ulListNumber.children[2])
ulListNumber.children[6].remove()