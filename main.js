let num = document.querySelector("h3")
let btns = document.querySelectorAll("button")


btns.forEach((b) => {
  b.addEventListener("click", (e) => {
    let key = e.currentTarget.classList

    let out = Number(num.innerText)

    if (key == "btn1") {
      out--
      num.style.color = "red"
    }
    else if (key == "btn2") {
      out = 0
      num.style.color = "black"
    }
    else if (key == "btn3") {
      out++
      num.style.color = "green"

    }

    num.innerText = out
  })
})
