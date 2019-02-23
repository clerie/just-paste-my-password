window.addEventListener ("load", unblock, false);

function unblock() {
  document.getElementByTagName("input").onpaste = () => true;
  console.log("Loaded!");
}
