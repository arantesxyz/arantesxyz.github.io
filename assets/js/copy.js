for (element of document.getElementsByClassName("copytext")) {
  element.addEventListener("click", onClickCopy)
}


function onClickCopy({ target }) {
  document.execCommand("copy")
  const { innerHTML } = target;

  const textToCopy = target.innerText
  copy(textToCopy)

  target.innerText = "Copied!"
  setTimeout(() => {
    target.innerHTML = innerHTML
  }, 1200);
}

function copy(text) {
  const tmp = document.createElement("input")
  tmp.value = text

  document.body.appendChild(tmp)
  tmp.select()
  document.execCommand("copy", false)
  tmp.remove()
}