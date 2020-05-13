chrome.runtime.onMessage.addListener(gotMessage);

function initializeElements() {
  let htmlElement = document.documentElement;
  let bodyElement = document.getElementsByTagName("body")[0];

  let mouseoverNode = document.createElement("div");
  mouseoverNode.setAttribute("id", "mouseover-overlay");

  bodyElement.appendChild(mouseoverNode);

  mouseoverNode.style.position = "fixed";
  mouseoverNode.style.zIndex = 7000;
  mouseoverNode.style.left = 0;
  mouseoverNode.style.top = 0;
  mouseoverNode.style.width = 0;
  mouseoverNode.style.height = 0;
  mouseoverNode.style.background = "rgba(0, 100, 255, 0.3)";
  mouseoverNode.style.pointerEvents = "none";
  mouseoverNode.style.transition = "0.2s";

  let popupOverlay = document.createElement("div");
  let popupContainer = document.createElement("div");
  let popupHeader = document.createElement("div");
  let popupBody = document.createElement("div");
  let popupFooter = document.createElement("div");
  let popupTitle = document.createElement("h2");
  let popupBodyRadioGroups = document.createElement("form");
  let popupBodyRemoveElementRadioBox = document.createElement("div");
  let popupBodyRemoveElementRadio = document.createElement("input");
  let popupBodyRemoveElementText = document.createElement("span");
  let popupBtnX = document.createElement("button");
  let popupBtnClose = document.createElement("button");
  let popupBtnSubmit = document.createElement("button");

  popupOverlay.setAttribute("class", "popup-overlay");
  popupContainer.setAttribute("class", "popup-container");
  popupHeader.setAttribute("class", "popup-header");
  popupBody.setAttribute("class", "popup-body");
  popupBodyRadioGroups.setAttribute("class", "popup-body-radio-groups");
  popupBodyRemoveElementRadioBox.setAttribute(
    "class",
    "popup-body-remove-element-radio-box"
  );
  popupBodyRemoveElementRadio.setAttribute("type", "radio");
  popupBodyRemoveElementRadio.setAttribute("name", "remove-element");
  popupBodyRemoveElementRadio.setAttribute("value", "remove element");
  popupBodyRemoveElementRadio.setAttribute(
    "class",
    "popup-body-radio popup-body-remove-element-radio"
  );
  popupFooter.setAttribute("class", "popup-footer");
  popupBtnX.setAttribute("class", "popup-close-btn");
  popupBtnClose.setAttribute("class", "popup-btn popup-close-btn");
  popupBtnSubmit.setAttribute("class", "popup-btn popup-submit-btn");

  htmlElement.appendChild(popupOverlay);
  popupOverlay.appendChild(popupContainer);
  popupContainer.appendChild(popupHeader);
  popupContainer.appendChild(popupBody);
  popupContainer.appendChild(popupFooter);
  popupHeader.appendChild(popupTitle);
  popupHeader.appendChild(popupBtnX);
  popupBody.appendChild(popupBodyRadioGroups);
  popupBodyRadioGroups.appendChild(popupBodyRemoveElementRadioBox);
  popupBodyRemoveElementRadioBox.appendChild(popupBodyRemoveElementRadio);
  popupBodyRemoveElementRadioBox.appendChild(popupBodyRemoveElementText);
  popupFooter.appendChild(popupBtnClose);
  popupFooter.appendChild(popupBtnSubmit);

  popupTitle.innerHTML = "What would you like to do with this element?";
  popupBodyRemoveElementText.textContent = " Remove Element";
  popupBtnX.innerHTML = "&times;";
  popupBtnClose.innerHTML = "Cancel";
  popupBtnSubmit.innerHTML = "Submit";

  popupOverlay.style.visibility = "hidden";
  popupOverlay.style.position = "absolute";
  popupOverlay.style.background = "#FFFFFF";
  popupOverlay.style.width = "50vw";
  popupOverlay.style.height = "50vh";
  popupOverlay.style.top = "25%";
  popupOverlay.style.left = "25%";
  popupOverlay.style.zIndex = 9000;

  popupContainer.style.display = "flex";
  popupContainer.style.flexDirection = "column";
  popupContainer.style.justifyContent = "space-between";
  popupContainer.style.height = "100%";

  popupHeader.style.margin = "10px";

  popupTitle.style.float = "left";

  popupBtnX.style.fontSize = "2em";
  popupBtnX.style.display = "inline-block";
  popupBtnX.style.verticalAlign = "middle";
  popupBtnX.style.borderRadius = "0";
  popupBtnX.style.margin = ".20rem";
  popupBtnX.style.color = "#666666";
  popupBtnX.style.background = "#FFFFFF";
  popupBtnX.style.border = "0";
  popupBtnX.style.float = "right";

  popupHeader.style.margin = "10px";

  popupBody.style.padding = "10px";

  popupFooter.style.padding = "10px";

  popupBtnClose.style.display = "inline-block";
  popupBtnClose.style.verticalAlign = "middle";
  popupBtnClose.style.borderRadius = "30px";
  popupBtnClose.style.margin = ".20rem";
  popupBtnClose.style.fontSize = "1rem";
  popupBtnClose.style.color = "#666666";
  popupBtnClose.style.background = "#FFFFFF";
  popupBtnClose.style.border = "1px solid #666666";
  popupBtnClose.style.float = "right";

  popupBtnSubmit.style.display = "inline-block";
  popupBtnSubmit.style.verticalAlign = "middle";
  popupBtnSubmit.style.borderRadius = "30px";
  popupBtnSubmit.style.margin = ".20rem";
  popupBtnSubmit.style.fontSize = "1rem";
  popupBtnSubmit.style.color = "#666666";
  popupBtnSubmit.style.background = "#FFFFFF";
  popupBtnSubmit.style.border = "1px solid #666666";
  popupBtnSubmit.style.float = "right";
}

function runRules() {
  // need to get feature bullets from popup, not webpage
}

initializeElements();
runRules();

// element manipulation option functions
function removeElementDisplay(element) {
  console.log("remove element");
  if (element !== undefined) {
    element.style.display = "none";
  }
}

function addElementDisplay(element) {
  if (element !== undefined) {
    element.style.display = "block";
  }
}

function removeElement(element) {
  /* checks to see if popup checkbox is checked or not */
}

// modal functions
function closeModal() {
  // console.log("close");
  let bodyElement = document.getElementsByTagName("body")[0];
  bodyElement.style.backgroundColor = "transparent";
  bodyElement.style.opacity = "1";

  let popupOverlayElement = document.getElementsByClassName("popup-overlay")[0];
  popupOverlayElement.style.visibility = "hidden";
}

function processModal(targetElement) {
  // console.log(targetElement);
  let radioBtns = document.getElementsByClassName("popup-body-radio");
  for (let i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked) {
      if (radioBtns[i].value == "remove-element") {
        removeElementDisplay(targetElement);
      }
    }
  }
}

function clickedElement(element, overlay) {
  overlay.style.top = "0px";
  overlay.style.left = "0px";
  overlay.style.width = "0px";
  overlay.style.height = "0px";

  let bodyElement = document.getElementsByTagName("body")[0];
  bodyElement.style.backgroundColor = "black";
  bodyElement.style.opacity = "0.5";
  bodyElement.style.zIndex = "8000";

  let popupOverlayElement = document.getElementsByClassName("popup-overlay")[0];
  popupOverlayElement.style.visibility = "visible";
}

function gotMessage(message, sender, sendResponse) {
  if (message.txt === "add_feature") {
    let overlay = document.querySelector("#mouseover-overlay");
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
    });

    // click on an element
    document.addEventListener("click", (e) => {
      if (document.removeEventListener) {
        document.removeEventListener(
          "mouseover",
          clickedElement(e.target, overlay)
        );

        let submitBtn = document.getElementsByClassName("popup-submit-btn")[0];
        submitBtn.addEventListener("click", processModal(e.target));
      } else if (document.detachEvent) {
        document.detachEvent("mouseover", clickedElement(e.target, overlay));

        let submitBtn = document.getElementsByClassName("popup-submit-btn")[0];
        submitBtn.addEventListener("click", processModal(e.target));
      }
    });

    let popupCloseBtns = document.getElementsByClassName("popup-close-btn");
    for (let i = 0; i < popupCloseBtns.length; i++) {
      // console.log(popupCloseBtns[i]);
      popupCloseBtns[i].addEventListener("click", closeModal());
    }
  }
}
