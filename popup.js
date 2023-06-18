
const darkBtn = document.getElementById('dark-btn');
const lightBtn = document.getElementById('light-btn');





darkBtn.addEventListener('click', async () => {
    chrome.storage.local.set({ color: 'black' }).then(() => { })

   
    await chrome.tabs.query({ active: true, currentWindow: true }, (
        tab => {
            chrome.scripting.executeScript({
                target: { tabId: tab[0].id },
                function: () => {
                    chrome.storage.local.get("color", ({ color }) => {
                        document.body.style.backgroundColor = color;
                        // document.body.style.color = 'white';
                        const allTags = document.querySelectorAll('*');
                        allTags.forEach(tag =>{
                            tag.style.color = 'white';
                        })
                    });
                }
            })
        }))




})


lightBtn.addEventListener('click', async () => {
    chrome.storage.local.set({ color: 'white' }).then(() => { })


    await chrome.tabs.query({ active: true, currentWindow: true }, (
        tab => {
            chrome.scripting.executeScript({
                target: { tabId: tab[0].id },
                function: () => {
                    chrome.storage.local.get("color", ({ color }) => {
                        document.body.style.backgroundColor = color;
                        
                        const allTags = document.querySelectorAll('*');
                            allTags.forEach(tag =>{
                                // tag.style.backgroundColor = color;
                                tag.style.color = 'black';
                            })
                    });
                }
            })
        }))
})
