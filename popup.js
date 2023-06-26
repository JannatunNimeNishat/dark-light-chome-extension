
/* const darkBtn = document.getElementById('dark-btn');
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
                        const allTags = document.querySelectorAll('*');
                        allTags.forEach(tag => {
                            tag.style.color = 'white';
                        })
                    });
                }
            })
        }))




})
 */

/* lightBtn.addEventListener('click', async () => {
    chrome.storage.local.set({ color: 'white' }).then(() => { })


    await chrome.tabs.query({ active: true, currentWindow: true }, (
        tab => {
            chrome.scripting.executeScript({
                target: { tabId: tab[0].id },
                function: () => {
                    chrome.storage.local.get("color", ({ color }) => {
                        document.body.style.backgroundColor = color;
                        

                        const allTags = document.querySelectorAll('*');
                        allTags.forEach(tag => {
                            
                            tag.style.color = 'black';
                            
                        })
                    });
                }
            })
        }))
}) */


// currency converter

const amount = document.getElementById('amount')
const oldCurrency = document.getElementById('old_currency')
const currency = document.getElementById('currency')
const convertBtn = document.getElementById('convert-btn')
const result = document.getElementById('result')


// require('dotenv').config()

const API_KEY = "kV57J9BG7u8fa+Lf3mAWYw==b240FZVqNNTqLvQm"
// const API_KEY = process.env.SECRET_KEY

convertBtn.addEventListener('click', () => {
    const amountValue = parseFloat(amount.value);

    
    if(!amountValue){
        console.log('inside amount value');
        return 0;
    }
    
    const currencyValue = currency.value;
    const oldCurrencyValue = oldCurrency.value 
    const apiUrl = `https://api.api-ninjas.com/v1/convertcurrency?have=${oldCurrencyValue}&want=${currencyValue}&amount=${amountValue}`
 
    
    //calling the converter api
    fetch(apiUrl, {
        headers: {
            'X-API-KEY': API_KEY
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            result.innerHTML = `${data.old_amount} ${data.old_currency} = ${data.new_amount} ${data.new_currency}`
        })
        .catch(error => {
            console.log(error.message);
            result.innerHTML = error
        })

})
