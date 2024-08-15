import $ from "jquery";

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.action === "getJob") {
    sendResponse({farewell: "goodbye"});
  }
});
