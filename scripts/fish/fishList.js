import { getFish } from "./fishData.js";
import { Fish } from "./fish.js";

export const fishList = () => {
    const allFishes = getFish();
    const DOMFish = document.querySelector("#fishList");
    let fishHTMLRepresentation = "";
    for(const oneThingFromTheSea of allFishes){
        fishHTMLRepresentation += Fish(oneThingFromTheSea);
        console.log("fishHTMLRepresentations", fishHTMLRepresentation);
    }

    DOMFish.innerHTML += fishHTMLRepresentation;

}