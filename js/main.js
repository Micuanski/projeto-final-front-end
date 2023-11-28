let docTitle = document.title;
 
window.addEventListener("blur", () => {
  document.title = "lá ele zé do bill"
})

window.addEventListener("focus", () => {
  document.title = docTitle;
})
