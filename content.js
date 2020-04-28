console.log("content");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log("vanished");
  console.log(message);
  div = document.getElementsByClassName(
    "notion-scroller vertical horizontal"
  )[0].children;
  if (div !== undefined) {
    div[1].style.display = "none";

    div[2].style.display = "none";
  }
}
