import {notifyPOST} from "./api";

export const monitor = async () => {
  const targetNode = document.documentElement;
  const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
      const attributeName = mutation.attributeName
      const content = mutation.target.textContent
      const type = mutation.type
      saveData({type, content, attributeName})
    }
  });
  const config = {
    attributes: true,   // Watch for changes to attributes
    childList: true,    // Watch for the addition or removal of child nodes
    subtree: true,      // Watch for changes in descendants of the target node
    characterData: true // Watch for changes to text content
  };

  observer.observe(targetNode, config);
}


export const saveData = async (data: any) => {
  await notifyPOST(data)
}
