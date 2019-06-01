searchSciHub = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "https://sci-hub.tw/" + query});
};

chrome.contextMenus.create({
    title: "to Sci-Hub",
    contexts:["selection"],
    onclick: searchSciHub
});
