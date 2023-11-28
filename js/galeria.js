let docTitle = document.title;
 
window.addEventListener("blur", () => {
  document.title = "foi oq consegui fazer com js"
})

window.addEventListener("focus", () => {
  document.title = docTitle;
})
