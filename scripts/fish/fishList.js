import { getFish, getUnworthyFish, getSoldierFish, getMostHolyFish } from "./fishData.js";
import { Fish } from "./fish.js";

export const fishList = () => {
    // const allFishes = getMostHolyFish().concat(getSoldierFish().concat(getUnworthyFish()));
    const unworthyFish = getUnworthyFish();
    addFishToDom(unworthyFish, "Unworthy Fish");

    const SoldierFish = getSoldierFish(); 
    addFishToDom(SoldierFish, "Soldier Fish");

    const MostHolyFish = getMostHolyFish();
    addFishToDom(MostHolyFish, "Most Holy Fish");

      //   const DOMFish = document.querySelector("#fishList");
      //   let fishHTMLRepresentation = "";
      //   for(const oneThingFromTheSea of allFishes){
      //       fishHTMLRepresentation += Fish(oneThingFromTheSea);
     //        console.log("fishHTMLRepresentations", fishHTMLRepresentation);
       //  }

      //   DOMFish.innerHTML += fishHTMLRepresentation;

}


const addFishToDom = (whichFishArray, phrase) => {

    const DOMFish = document.querySelector("#fishList");
    let fishHTMLRepresentation = "";
    for(const oneThingFromTheSea of whichFishArray){
        fishHTMLRepresentation += Fish(oneThingFromTheSea);
        console.log("fishHTMLRepresentations", fishHTMLRepresentation);
    }

    DOMFish.innerHTML += `<h2>${phrase}</h2>
                            <div class="fishSection">${fishHTMLRepresentation}</div>`;
}