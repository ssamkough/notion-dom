chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log("gotMessage");
  console.log(message.txt);

  if (message.txt === "add_feature") {
    console.log("grab and click: " + message.txt);
    let overlay = document.querySelector("#mouseover_overlay");
    document.addEventListener("mouseover", (e) => {
      let elem = e.target;
      let rect = elem.getBoundingClientRect();
      overlay.style.top = rect.top + "px";
      overlay.style.left = rect.left + "px";
      overlay.style.width = rect.width + "px";
      overlay.style.height = rect.height + "px";
    });
  }

  if (message.txt === "record") {
    console.log("removing: " + message.txt);
    div = document.getElementsByClassName(
      "notion-scroller vertical horizontal"
    )[0].children;

    if (div !== undefined) {
      div[1].style.display = "none";

      div[2].style.display = "none";
    }
  }
}
