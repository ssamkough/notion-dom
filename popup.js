let features = [];

window.addEventListener("load", function load(event) {
  // let checkbox = document.querySelector("input[name=checkbox]");
  // checkbox.addEventListener("click", function () {
  //   enableCheckbox();
  // });

  let addCheckboxBtn = document.getElementById("add-checkbox");
  addCheckboxBtn.addEventListener("click", function () {
    addCheckbox();
  });
});

function enableCheckbox() {
  let params = {
    active: true,
    currentWindow: true,
  };

  chrome.tabs.query(params, gotTabs);

  function gotTabs(tabs) {
    let msg = { txt: "record" };
    chrome.tabs.sendMessage(tabs[0].id, msg);
  }
}

function addCheckbox() {
  let params = {
    active: true,
    currentWindow: true,
  };

  chrome.tabs.query(params, addFeature);

  function addFeature(tabs) {
    let msg = { txt: "add_feature" };
    chrome.tabs.sendMessage(tabs[0].id, msg);
  }
}
