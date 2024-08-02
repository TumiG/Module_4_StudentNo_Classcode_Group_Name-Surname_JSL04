// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection
// Given a variable that holds a user's preferred type of Monster Energy drink, 
// print whether the user prefers a "Regular" or "Sugar-free" variety. If the preference is not set, default to "Regular".

let userPreference = 'Sugar-free'; 
const message = preference ? `The user prefers ${preference} Monster Energy.` : "The user prefers Regular Monster Energy.";
console.log(message);





// #### Challenge 2: Stock Check
// You have a variable that tracks the number of Monster Energy cans ssssleft in the fridge. 
// Use a ternary operator to print "Time to restock!" if the number is less than 5, or "We're stocked!" if the number is 5 or more.

let cansLeft = 3;
const stockMessage = cansLeft < 5 ? "Time to restock!" : "We're stocked!";
console.log(stockMessage);


// #### Challenge 3: Workout Intensity
// Based on the current heart rate, determine if the user should drink a Monster Energy drink to boost their workout. 
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, print "Energy levels are high!".

let heartRate = 95; 
const heartRateMessage = heartRate < 100 ? "Boost needed!" : "Energy levels are high!";
console.log(heartRateMessage);



// #### Challenge 4: Temperature Suitability
// Monster Energy drinks are best served cold. Given the current temperature, use a ternary to print "Chilled to perfection!" 
// if the temperature is below or equal to 5°C, or "Needs a cooler!" if above 5°C.

let currentTemp = 4;
const tempMessage = temperature <= 5 ? "Chilled to perfection!" : "Needs a cooler!"; 
console.log(tempMessage);


// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format
let currentHour = 22; 
const hourMessage = (currentHour >= 7 && currentHour < 24) ? "Unleash the beast!" : "Better stick to water.";
console.log(hourMessage); 
// Write your code below this line to determine if it's a good idea to have a Monster Energy drink based on the current hour
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!"
// Otherwise, print "Better stick to water."





