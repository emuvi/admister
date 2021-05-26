var loadingCount = 0;

function adLoadingInc() {
  loadingCount++;
  loadingUpdate();
}

function adLoadingDec() {
  if (loading > 0) {
    loadingCount--;
    loadingUpdate();
  }
}

function adLoadingUpdate() {}

function adPutMessage(message, type) {
  const divMessages = document.getElementById("divMessages");
  divMessages.childNodes.forEach((child) => {console.log(child)});
  const newMessage = document.createElement("div");
  newMessage.classList.add(type === "error" ? "divError" : "divSuccess");
  newMessage.innerHTML =
    '<button onclick="removeParent(this)">X</button><span>' + message + "</span>";
  divMessages.appendChild(newMessage);
}

function adPutSuccess(message) {
  adPutMessage(message, "success");
}

function adPutError(error) {
  console.log("Entrou adPutError");
  adPutMessage(error, "error");
}

function removeParent(element) {
  element.parentNode.remove();
}
