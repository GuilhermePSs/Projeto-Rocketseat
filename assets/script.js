function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove('light')
  // }else{
  //   html.classList.add('light')
  // }

  //ou
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatarlight.png")
  } else {
    //se tiver dark mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar 2.png")
  }
}
