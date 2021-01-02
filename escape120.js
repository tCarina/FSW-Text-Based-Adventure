const readLineSync = require("readline-sync");

const quit3 = () => {
    console.log("Better luck next time! Have fun eating your fellow humans.")
    process.exit();
}
const quit2 = () => {
    console.log("\"I\'m sorry, this is just too much for me. I have to go.\" You drop the walkie-talkie and continue on your way. Good luck out there!")
    process.exit();
}

const quit1 = () => {
    console.log("You decide to leave it alone, and continue on your way. Hopefully you come across water soon, but who knows how long you'll survive out here. Good luck.")
    process.exit();
}

const intro = console.log("A mysterious virus has taken over New York City.\nThose infected have turned in to mindless, hungry, cannibals. So far it seems nothing takes them down besides an direct brain injury.\nYou have been running for days now, food and water are becoming scarce. The number of infected seems to grow by the hundreds a day.\nWhile on your search for water you come to the front of 120 Vernon Blvd. It is a 3-story-old walk up and the power seems to be out.\nAt the front of the door there is a dead soldier, a backpack on the floor beside him and walkie-talkie in his hand.\nSuddenly a mans voice comes through the device.",
 "\"Walker, are you there?\"") 


const gameOver = () => {
    console.log("You didn\t make it. You can feel the virus slowly taking over your body from the last bite. The world fades around you and all you feel is hunger. It's all you can think about... \"Must...eat...\"")
    tryAgain(); 
}

const tryAgain = () => {
    if(readLineSync.keyInYN("Would you like to try again?")) {
        console.clear();
        startGame()
    }
    else {
        quit3();
    }
}
  let answer = ""

  let chooseDoor = () => {
     answer = readLineSync.question("There are 4 doors. Two on the left and two on the right. Which door will you choose?")
    answer.trim().toLowerCase()
  }
    

const floor1 = () => {
    console.log(`You enter the building, there\'s barely enough light to see.\n"Okay, there are 4 doors on each floor.\nThe team cleared some of the rooms but not all. Be careful!\n There\'s one item you need on each floor before going to the next. Good luck!"`)
    chooseDoor()

   if(answer === "left 1") {
    console.log("You slowly open the door and look inside. It\'s a bathroom.\n There is a dead soldier on the ground in a pool of blood.\nThere is nothing else here. You step back out.")
    chooseDoor()
    }
  }

const startGame = () => {
    let vaccs = 3
    let health = 4
    while(health > 0){
        console.clear()
        console.log(`"Okay, inside the backpack are three vaccines. If you get bitten, use them. Be careful though,\n there are only three. I'll be helping you as much as I can with the information from my last communications with the team."`)
       floor1()
    }
    gameOver()    

    }

if(readLineSync.keyInYN("Do you choose to answer?")) {
    console.clear()
    console.log("You pick up the walkie talkie and respond. \"Hello?\" \nTo your relief, the man answers back. \"This is Sergeant Pheonix. Where is Walker?\" You inform him that the soldier he is looking for is dead. \n He sighs. \"Listen kid, Walker and his team were in the middle of an important mission. He stayed behind to hold off a hoard while his team went in to try and get to the rooftop. It seems they got separated. On the rooftop there\'s a helicopter waiting to transport them back to base. However, one of the soldiers had the key to the rooftop and there was a scientist with them that had vital blueprints and notes that we told us how to reproduce this vaccine and put an end to this virus. There are 3 floors to make it through but if you can find the blueprints on floor 2 and the key on floor 3, we can guarantee your survival.\"")
    if(readLineSync.keyInYN("Will you attempt to help us?")){
        startGame() 
    } else {
        quit2()
    }
} else {
    quit1()
}








