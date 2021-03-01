const fishCollection = [
    {
        saltWater: true,
        harvestLocation: "Pacific Ocean",
        diet: "algae",
        name: "Malcolm",
        species: "Blue Tang",
        inches: 13,
        image: "bluefish.jpg"
    },
    {
        saltWater: true,
        harvestLocation: "Bali",
        diet: "really small fish",
        name: "Bob",
        species: "Guppy",
        inches: 3,
        image: "pinkfish.jpg"
    },
    {
        saltWater: true,
        harvestLocation: "Atlantic Ocean",
        diet: "squid",
        name: "BigBoss",
        species: "Amber Jack",
        inches: 60,
        image: "greyfish.jpg"
    },
    {
        saltWater: true,
        harvestLocation: "Pacific Ocean",
        diet: "shellfish",
        name: "Jerry",
        species: "swordfish",
        inches: 80,
        image: "swordFish.jpg"
    },
    {
        saltWater: true,
        harvestLocation: "Gulf of Mexico",
        diet: "tiny fish",
        name: "Predator",
        species: "catfish",
        inches: 20,
        image: "goldFish.jpg"
    },
    {
        saltWater: true,
        harvestLocation: "Atlantic Ocean",
        diet: "Herring",
        name: "Sabre",
        species: "Swordfish",
        inches: 117.6,
        image: "swordFish.jpg"
    },
    {
        saltWater: false,
        harvestLocation: "Amazon Basin",
        diet: "brine shrimp",
        name: "Myrti",
        image: "shrimpFish.jpg",
        inches: 12,
        species: "angel fish"
    },
    {
        saltWater: true,
        harvestLocation: "Atlantic Ocean",
        diet: "Plankton",
        name: "Nemo",
        species: "Clownfish",
        inches: 4,
        image: "stripedFish.jpg"
    },
    {
        saltWater: false,
        harvestLocation: "Mississippi River",
        diet: "Everything",
        name: "Vacuum",
        species: "Catfish",
        inches: 24,
        image: "uglyFish.jpg"
    },
    {
        saltWater: false,
        harvestLocation: "Bobbies Fish Emporium",
        diet: "minnows",
        name: "Ralph",
        species: "Smallmouth Bass",
        inches: 14,
        image: "bigFish.jpg"
    },
    {
        saltWater: false,
        harvestLocation: "Cumberland River",
        diet: "anything",
        name: "Whiskers",
        species: "Ictalurus furcatus",
        inches: 39,
        image: "patrickFish.jpg"
    },
    {
        saltWater: true,
        harvestLocation: "South Pacific",
        diet: "shrimp",
        inches: 64,
        species: "Tuna",
        name: "Bruno",
        image: "shrimpFish.jpg"
    },
    {
        saltWater: false,
        harvestLocation: "Petsmart",
        diet: "algae",
        name: "Dorothy",
        species: "goldfish",
        inches: 3,
        image: "goldFish.jpg"
    },
    {
        saltWater: false,
        harvestLocation: "Lake Tahoe",
        diet: "insects",
        name: "Trent",
        species: "Rainbow Trout",
        inches: 21,
        image: "rainbowFish.png"
    },
    {
        saltWater: true,
        harvestLocation: "Carribean Sea",
        diet: "shrimp",
        name: "Stephen",
        species: "Angler",
        inches: 23,
        image: "shrimpFish.jpg"
    },
    {
        saltWater: true,
        harvestLocation: "Barbados",
        diet: "anchoves",
        name: "Pizza",
        species: "Tuna",
        inches: 40,
        image: "tunaFish.jpg"
    },
    {
        saltWater: false,
        harvestLocation: "TN River",
        diet: "Bacon",
        name: "Finn",
        species: "Bass",
        inches: 20,
        image: "greyFish.jpg",
    },
    {
        saltWater: true,
        diet: "mollusks",
        name: "Simba",
        species: "lionfish",
        harvestLocation: "Red Sea",
        inches: 10,
        image: "lionFish.jpg"
    },
    {
        saltWater: true,
        harvestLocation: "New Zealand",
        diet: "Lost Sailors",
        name: "Tiki",
        species: "Parrot Fish",
        inches: 36,
        image: "stripedFish.jpg"
    },
    {
        saltWater: true,
        harvestLocation: "Red Sea",
        diet: "algae",
        name: "Bobo",
        species: "Clown Fish",
        inches: 5,
        image: "uglyFish.jpg"
    },
    {
        saltWater: true,
        harvestLocation: "Atlantic Sea",
        name: "Flipper",
        inches: 12,
        image: "pinkFish.jpg",
        diet: "worms",
        species: "Garibaldi"
    },
    {
        saltWater: true,
        harvestLocation: "Bikini Bottom",
        diet: "Big Ole Fish",
        name: "Pearl",
        species: "Whale",
        inches: 1000,
        image: "whaleFish.jpg"
    },
    {
        saltWater: false,
        harvestLocation: "Port Innsmouth",
        diet: "Primeval Shadows",
        name: "Cthulhu",
        species: "Old One",
        inches: 999,
        image: "scaryFish.jpg"
    },
    { 
        saltWater: false, 
        harvestLocation: "Amazon River", 
        diet: "smaller fish", 
        name: "Bitey", 
        species: "Pirhana", 
        inches: 7.5, 
        image: "biteFish.jpg" 
    },
    {
        saltWater: true,
        harvestLocation: "St.Croix",
        diet: "squid",
        name: "Crush",
        species: "blue ting",
        inches: 7,
        image: "bluefish.jpg"
    },
    {
        saltWater: false,
        harvestLocation: "Minnesota",
        diet: "Cherry Tomatoes",
        name: "Frank",
        species: "Piranha",
        inches: 7,
        image: "biteFish.jpg"
    },
    { 
        saltWater: true, 
        harvestLocation: "Atlantic, Pacific, and southern sea", 
        diet: "smaller fish", 
        name: "Mr. Bluefin Tuna", 
        species: "Thunnus thynnus", 
        inches: 84, 
        image: "blueFish.jpg"
    },
    {
        saltWater: true,
        harvestLocation: "Baltic Sea",
        diet: "smaller fish",
        name: "Fil",
        species: "goldFish",
        inches: 40,
        image: "goldFish.jpg"
    }
];

export const getFish = () => {
    return fishCollection
};

export const getMostHolyFish = () => {
    
    const holyFishArray = []

    for (const fishObj of fishCollection) {
        if (fishObj.inches % 3 === 0)
        holyFishArray.push(fishObj)
    };

    return holyFishArray
};

export const getSoldierFish = () => {

    const soldiersArray = []

    for (const fishObj of fishCollection) {
        if (fishObj.inches % 5 === 0 && fishObj.inches % 3 !== 0)
        soldiersArray.push(fishObj)
    };

    return soldiersArray
};

export const getUnworthyFish = () => {

    const unworthyArray = []

    for (const fishObj of fishCollection) {
        if (fishObj.inches % 5 !== 0 && fishObj.inches % 3 !== 0)
         unworthyArray.push(fishObj)  
    };

    return unworthyArray
};

