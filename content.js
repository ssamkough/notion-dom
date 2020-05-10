chrome.runtime.onMessage.addListener(gotMessage);

function initializeElements() {
  let bodyElement = document.getElementsByTagName("body")[0];

  let mouseoverNode = document.createElement("div");
  mouseoverNode.setAttribute("id", "mouseover_overlay");

  bodyElement.appendChild(mouseoverNode);

  mouseoverNode.style.position = "fixed";
  mouseoverNode.style.zIndex = 999999999999999;
  mouseoverNode.style.left = 0;
  mouseoverNode.style.top = 0;
  mouseoverNode.style.width = 0;
  mouseoverNode.style.height = 0;
  mouseoverNode.style.background = "rgba(0, 100, 255, 0.3)";
  mouseoverNode.style.pointerEvents = "none";
  mouseoverNode.style.transition = "0.2s";

  let popupOverlay = document.createElement("div");
  let popupContent = document.createElement("div");
  let popupTitle = document.createElement("h2");
  let popupText = document.createElement("p");
  let popupBtnClose = document.createElement("button");

  popupOverlay.setAttribute("class", "popup-overlay");
  popupContent.setAttribute("class", "popup-content");
  popupBtnClose.setAttribute("class", "btn-close");
  popupTitle.innerHTML = "Pop-Up";
  popupText.innerHTML = "This is an example pop-up.";
  popupBtnClose.innerHTML = "Close";

  bodyElement.appendChild(popupOverlay);
  popupOverlay.appendChild(popupContent);
  popupContent.appendChild(popupTitle);
  popupContent.appendChild(popupText);
  popupContent.appendChild(popupBtnClose);

  popupOverlay.style.visibility = "hidden";
  popupOverlay.style.position = "absolute";
  popupOverlay.style.background = "#FFFFFF";
  popupOverlay.style.border = "3px solid #666666";
  popupOverlay.style.width = "50%";
  popupOverlay.style.height = "50%";
  popupOverlay.style.left = "25%";

  popupContent.style.visibility = "hidden";

  popupBtnClose.style.display = "inline-block";
  popupBtnClose.style.verticalAlign = "middle";
  popupBtnClose.style.borderRadius = "30px";
  popupBtnClose.style.margin = ".20rem";
  popupBtnClose.style.fontSize = "1rem";
  popupBtnClose.style.color = "#666666";
  popupBtnClose.style.background = "#FFFFFF";
  popupBtnClose.style.border = "1px solid #666666";
}

function runRules() {
  // need to get feature bullets from popup, not webpage
}

initializeElements();
runRules();

function clickedElement(element, overlay) {
  overlay.style.top = "0px";
  overlay.style.left = "0px";
  overlay.style.width = "0px";
  overlay.style.height = "0px";

  console.log(element.target);
  let htmlElement = document.documentElement;
  htmlElement.style.backgroundColor = "black";
  htmlElement.style.opacity = "0.5";
  htmlElement.style.zIndex = "9999";

  let popupOverlayElement = document.getElementsByClassName("popup-overlay")[0];
  let popupContentElement = document.getElementsByClassName("popup-content")[0];

  popupOverlayElement.style.visibility = "visible";
  popupContentElement.style.visibility = "visible";
}

function gotMessage(message, sender, sendResponse) {
  console.log("gotMessage");
  console.log(message.txt);

  if (message.txt === "add_feature") {
    let overlay = document.querySelector("#mouseover_overlay");
    document.addEventListener("mouseover", (e) => {
      let elem = e.target;
      let rect = elem.getBoundingClientRect();
      overlay.style.top = rect.top + "px";
      overlay.style.left = rect.left + "px";
      overlay.style.width = rect.width + "px";
      overlay.style.height = rect.height + "px";

      // get all a elements and disable them
      // let aElements = document.getElementsByTagName("a");
      // for (let i = 0; i < aElements.length; i++) {
      //   aElements[i].style.pointerEvents = "none";
      // }

      document.addEventListener("click", (e) => {
        document.removeEventListener("mouseover", clickedElement(e, overlay));
      });
    });
  }

  if (message.txt === "record") {
    div = document.getElementsByClassName(
      "notion-scroller vertical horizontal"
    )[0].children;

    if (div !== undefined) {
      div[1].style.display = "none";

      div[2].style.display = "none";
    }
  }
}
