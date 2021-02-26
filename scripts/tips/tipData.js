const tipCollection = [
    {
    tipCategory: "Tank Cleaning",
    tipOne: "If you have a large, well established tank you should clean your tank on a weekly of bi-weekly basis.",
    tipTwo: "A water change should be done to the keep the tank clean and the fish happy.",
    tipThree: "Depending on the type of filter you use for the tank, you may be able to get away with cleaning the tank once per month."
},
{
    tipCategory: "Temperature Tips",
    tipOne: "A good range is 76° to 80°F (25° to 27°C).",
    tipTwo: "A few species need to be kept several degrees warmer, and some species require temperature a few degrees cooler.",
    tipThree: "A thermometer is vital. A stick-on type enables you to check the temperature whenever you look at the aquarium."
},
{
    tipCategory: "Salinity Levels",
    tipOne: "Most reef-building corals also require very saline (salty) water ranging from 32 to 42 parts per thousand.",
    tipTwo: "The water must also be clear so that a maximum amount of light penetrates it.",
    tipThree: "Too high of salinity and the enzymes and protein synthesis in the bodies of inverts and fish don't work so well."
}
];

export const getTip = () => {
    return tipCollection
};
