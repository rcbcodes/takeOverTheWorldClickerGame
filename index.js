let takeOverTheWorldClickerGame = document.getElementById("takeOverTheWorldClickerGame");
let takeOverTheWorldClickerGameButton = document.getElementById("takeOverTheWorldClickerGameButton");
let money = 0
let moneyText = document.getElementById("moneyText")
let banker = 1
let bankerText = document.getElementById("bankerText")
let bankerprice = 50
let bankerPriceText = document.getElementById("bankerPriceText")
let farmers = 0
let farmersText = document.getElementById("farmersText")
let farmersprice = 50
let farmersPriceText = document.getElementById("farmersPriceText")
let wheat = 0
let miners = 0
let minersPrice = 50
let minersText = document.getElementById("minersText")
let minersPriceText = document.getElementById("minersPriceText")
let stone = 0
let woodCutters = 0
let woodCuttersPrice = 50
let woodCuttersText = document.getElementById("woodCuttersText")
let woodCuttersPriceText = document.getElementById("woodCuttersPriceText")
let wood = 0
let people = 0
let towns = 0
let townsText = document.getElementById("townsText")
let citys = 0
let citysText = document.getElementById("citysText")
let countrys = 0
let countrysText = document.getElementById("countrysText")
let continents = 0
let continentsText = document.getElementById("continentsText")
let earths = 0
let earthsText = document.getElementById("earthsText")

// function save() {
//     let cache = []
//     localStorage.setItem("window", JSON.stringify(window, function(key, value) {
//         if (key === "localStorage") {
//             return
//         }
//         if ( typeof value === "string" || typeof value === "number" || typeof value === "HTMLElement") {
//             return value
//         } else {
//             return
//         }
//         // if (typeof value === 'object' && value !== null) {
//         //     if (cache.indexOf(value) !== -1) {
//         //         // Duplicate reference found
//         //         try {
//         //             // If this value does not reference a parent it can be deduped
//         //             return JSON.parse(JSON.stringify(value));
//         //         } catch (error) {
//         //             // discard key if value cannot be deduped
//         //             return;
//         //         }
//         //     }
//         //     // Store value in our collection
//         //     cache.push(value);
//         // }
//         // return value;
//     }))
// }

// function load() {
//     let myvar = localStorage.getItem("window")
//     if (myvar !== undefined) {
//         let mywindow = JSON.parse(myvar)
//         console.log("not undef")
//     }
//     console.log("load")
//     setInterval(save, 1000 * 60 * 5)
// }
// window.onload = load
function updateMoneyText() {
    moneyText.textContent = "Money: " + money
}
function updateWoodText() {
    woodText.textContent = "Wood: " + wood
}
function updateStoneText() {
    stoneText.textContent = "Stone: " + stone
}
function updateWheatText() {
    wheatText.textContent = "Wheat: " + wheat
}
function updatePeopleText() {
    peopleText.textContent = "People: " + people
}
function updateTownsText() {
    townsText.textContent = "Towns: " + towns
}
function updateCitysText() {
    citysText.textContent = "Citys: " + citys
}
function updateCountrysText() {
    countrysText.textContent = "Countrys: " + countrys
}
function updateContinentsText() {
    continentsText.textContent = "Continents: " + continents
}
function getmoney() {
    money += banker
    console.log(money)
    updateMoneyText()
    if (money >= 1) {
        console.log("your money is one")
    }
}
function getfarmers() {
    if (money >= farmersprice) {
        money -= farmersprice
        updateMoneyText()
        farmers += 1
        farmersprice += 50
        farmersText.textContent = "Farmers: " + farmers
        farmersPriceText.textContent = "FarmersPrice: " + farmersprice
        console.log(farmers)
        if (farmers === 1) {
            console.log("your farmers is one")
        }
    }
}
function getWheat(){
    if(farmers >= 1){
        wheat += farmers
        wheatText.textContent = "Wheat: " + wheat
    }
    
}
setInterval(function(){ getWheat() }, 5000)

function getbanker() {
    if (money >= bankerprice) {
        money -= bankerprice
        updateMoneyText()
        banker += 1
        bankerprice *= 2
        bankerText.textContent = "Banker: " + banker
        bankerPriceText.textContent = "Bankerprice: " + bankerprice
        console.log(banker)
        if (banker === 1) {
            console.log("your banker is one")
        }
    }
    
}
function getMiners() {
    if (money >= minersPrice) {
        money -= minersPrice
        updateMoneyText()
        miners += 1
        minersPrice += 50
        minersText.textContent = "Miners: " + miners
        minersPriceText.textContent = "MinersPrice: " + minersPrice
        console.log(miners)
        if (miners === 1) {
            console.log("your miners is one")
        }
    }
}
function getStone(){
    if(miners >= 1){
        stone += miners
        stoneText.textContent = "Stone: " + stone
    }
    
}
setInterval(function(){ getStone() }, 5000)
function getWoodCutters() {
    if (money >= woodCuttersPrice) {
        money -= woodCuttersPrice
        updateMoneyText()
        woodCutters += 1
        woodCuttersPrice += 50
        woodCuttersText.textContent = "WoodCutters: " + woodCutters
        woodCuttersPriceText.textContent = "WoodCuttersPrice: " + woodCuttersPrice
        console.log(woodCutters)
        if (woodCutters === 1) {
            console.log("your woodCutters is one")
        }
    } 
}
function getWood(){
    if(woodCutters >= 1){
        wood += woodCutters
        woodText.textContent = "Wood: " + wood
    }
    
}
setInterval(function(){ getWood() }, 5000)
function getTowns() {
    if (money >= 500 && wheat >= 20 && stone >= 20 && wood >= 20) {
        money -= 500
        wood -= 20
        wheat -= 20
        stone -= 20
        updateMoneyText()
        updateWoodText()
        updateStoneText()
        updateWheatText()
        updatePeopleText()
        towns += 1
        people += 5
        townsText.textContent = "Towns: " + towns
        console.log(towns)
        if (towns === 1) {
            console.log("your towns is one")
        }
    } 
}
function getMoneyWithPeople(){
    if(people >= 1){
        money += people
        peopleText.textContent = "People: " + people
        updateMoneyText()
    }
    
}
setInterval(function(){ getMoneyWithPeople() }, 5000)
function getCitys() {
    if (money >= 3000 && wheat >= 100 && stone >= 100 && wood >= 100 && towns >= 5) {
        money -= 3000
        wood -= 100
        wheat -= 100
        stone -= 100
        towns -= 5
        updateMoneyText()
        updateWoodText()
        updateStoneText()
        updateWheatText()
        updatePeopleText()
        updateTownsText()
        citys += 1
        people += 50
        citysText.textContent = "Citys: " + citys
        console.log(towns)
        if (citys === 1) {
            console.log("your citys is one")
        }
    } 
}
function getCountrys() {
    if (money >= 10000 && wheat >= 3000 && stone >= 3000 && wood >= 3000 && towns >= 10 && citys >= 5) {
        money -= 10000
        wood -= 3000
        wheat -= 3000
        stone -= 3000
        towns -= 10
        citys -= 5
        updateMoneyText()
        updateWoodText()
        updateStoneText()
        updateWheatText()
        updatePeopleText()
        updateTownsText()
        updateCitysText()
        countrys += 1
        people += 350
        countrysText.textContent = "Countrys: " + countrys
        console.log(towns)
        if (countrys === 1) {
            console.log("your countrys is one")
        }
    } 
}
function getContinents() {
    if (money >= 100000 && wheat >= 7000 && stone >= 7000 && wood >= 7000 && towns >= 30 && citys >= 15 && countrys >= 7) {
        money -= 100000
        wood -= 7000
        wheat -= 7000
        stone -= 7000
        towns -= 30
        citys -= 15
        countrys -= 7
        updateMoneyText()
        updateWoodText()
        updateStoneText()
        updateWheatText()
        updatePeopleText()
        updateTownsText()
        updateCitysText()
        updateCountrysText()
        continents += 1
        people += 3500
        continentsText.textContent = "Continents: " + continents
        console.log(continents)
        if (continents === 1) {
            console.log("your continents is one")
        }
    } 
}
function getEarths() {
    if (money >= 1000000 && wheat >= 15000 && stone >= 15000 && wood >= 15000 && towns >= 100 && citys >= 50 && countrys >= 30 && continents >= 7) {
        money -= 1000000
        wood -= 15000
        wheat -= 15000
        stone -= 15000
        towns -= 100
        citys -= 50
        countrys -= 30
        continents -= 7
        updateMoneyText()
        updateWoodText()
        updateStoneText()
        updateWheatText()
        updatePeopleText()
        updateTownsText()
        updateCitysText()
        updateCountrysText()
        updateContinentsText()
        earths += 1
        people += 40000
        earthsText.textContent = "Earths: " + earths
        console.log(earths)
        if (earths === 1) {
            console.log("your earths is one")
        }
    } 
}
