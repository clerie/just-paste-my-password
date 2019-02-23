setTimeout(function () {
  for (var e of document.getElementsByName("passwort")) {
    e.onpaste = () => true;
  }
}, 1000);
