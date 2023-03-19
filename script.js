const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

check = {
  itemCount: 0,
  uncheckedCount: 0
}


document.getElementById("submit").addEventListener("submit", function(event) {
  event.preventDefault()
  if(document.getElementById("text").value !== "") {
    let todoList = document.getElementById('todo-list')

    let li = document.createElement("li")
    li.classList.add("flex", "flex-row", "flex-nowrap", "relative", "justify-between", "items-center", "mt-1", "px-4", "py-3", "w-full", "bg-white", "shadow-xl", "rounded-md", "text-slate-600")

    let divInput = document.createElement("div")
    divInput.classList.add("basis-1/12")

    let input = document.createElement("input")
    input.setAttribute("type", "checkbox")
    input.classList.add("appearance-none", "absolute", "top-0", "left-0", "cursor-pointer", "m-4", "w-10", "h-10", "inline-block", "border-2", "checked:bg-slate-500", "checked:text-ehite", "shadow-inner", "checked:after:text-slate-500", "checked:after:content-['\\270e']", "checked:after:text-2xl", "hover:bg-slate-200", "checked:hover:bg-slate-500", "todoCount")
    input.setAttribute("onClick", "countUnchecked()")
    divInput.appendChild(input)

    let divText = document.createElement("div")
    divText.classList.add("basis-10/12")
    divText.innerHTML = document.getElementById("text").value

    let button = document.createElement("button")
    button.classList.add("hover:bg-slate-400", "bg-slate-300", "active:bg-slate-500", "focus:bg-slate-500", "rounded-full", "shadow-xl")
    button.setAttribute("onClick", "deleteTodo(this)")
    button.innerHTML = '<svg class="fill-red-700" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/></svg>'

    li.appendChild(divInput)
    li.appendChild(divText)
    li.appendChild(button)


    todoList.appendChild(li)
    document.getElementById("text").value = ''
    check.itemCount++
    document.getElementById("item-count").innerHTML = check.itemCount
    countUnchecked()
  }
})

function deleteTodo(g) {
  g.parentElement.remove()
  check.itemCount--
  document.getElementById("item-count").innerHTML = check.itemCount
  countUnchecked()
}

function countUnchecked() {
  check.uncheckedCount = 0
  document.querySelectorAll(".todoCount").forEach(el => {
    if (el.checked === false) {
      check.uncheckedCount++
    }
  })
  document.getElementById("unchecked-count").innerHTML = check.uncheckedCount
}
