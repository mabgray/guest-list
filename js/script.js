// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible\)
const guestFull = document.querySelector(".alert");
const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assignedItems");

addGuestButton.addEventListener("click", function(){
    let guest = guestInput.value;
    //console.log(guest);
    if(guest !== ""){
      
       addToList(guest);
       clearInput();
       updateGuestCount();
     

    }
});

var clearInput = function(){
    guestInput.value = "";
}

const addToList = function(guest){
    const listItem = document.createElement("li");
    listItem.innerText = guest;
   guestList.append(listItem);
   
}

const updateGuestCount = function(){
    let guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;

        if(guests.length === 8){
            addGuestButton.classList.add("hide");
            guestInput.classList.add("hide");
            guestInputLabel.classList.add("hide");
            guestFull.classList.remove("hide");

        }
}

const assignItems = function(){
    let potLuckItems = ["tofu scramble", "bean and cheese quesidillas", "kale chips","blondies", "ooey gooey bars", "macaroni salad", "buffalo cauliflower", "watermelon", "limeade", "grapes", "potato chips","veggie burger sliders"];

    const allGuests = document.querySelectorAll(".guestList li");
        for(var guest of allGuests){
            let randomPotLuckIndex = Math.floor(Math.random() * potLuckItems.length);
            let randomPotLuckItem = potLuckItems[randomPotLuckIndex];
            listItem.innerText = `hey ${guest.innerText} can you bring ${randomPotLuckItem}?`
            assignedItems.append(listItem);
            potLuckItems.splice(randomPotLuckIndex, 1);

        }

}

assignButton.addEventListener("click", function(){
    assignItems();
    assignButton.disabled = true;
});