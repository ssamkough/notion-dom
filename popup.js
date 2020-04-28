window.addEventListener("load", function load(event) {
  let checkbox = document.querySelector("input[name=checkbox]");
  checkbox.addEventListener("click", function () {
    enableCheckbox();
  });

  let addCheckboxBtn = document.getElementById("addCheckbox");
  addCheckboxBtn.addEventListener("click", function () {
    addCheckbox();
  });

  //   let overlay = document.querySelector("#mouseover_overlay");
  //   document.addEventListener("mouseover", (e) => {
  //     let elem = e.target;
  //     let rect = elem.getBoundingClientRect();
  //     overlay.style.top = rect.top + "px";
  //     overlay.style.left = rect.left + "px";
  //     overlay.style.width = rect.width + "px";
  //     overlay.style.height = rect.height + "px";
  //   });
});

function enableCheckbox() {
  let params = {
    active: true,
    currentWindow: true,
  };

  chrome.tabs.query(params, gotTabs);

  function gotTabs(tabs) {
    let msg = {
      txt: "hello",
    };

    chrome.tabs.sendMessage(tabs[0].id, msg);
  }
}

function addCheckbox() {
  console.log("add checkbox");
}
