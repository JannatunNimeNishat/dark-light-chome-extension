chrome.storage.local.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });

 /*  chrome.storage.local.get(["name"]).then((result) => {
    console.log("Value currently is " + result.name);
  }); */