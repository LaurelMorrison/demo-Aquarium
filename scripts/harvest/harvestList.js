import { getHarvest } from "./harvestData.js";
import { Harvest } from "./harvest.js";

export const harvestList = () => {
    const allHarvest = getHarvest ();
    const DOMHarvest = document.querySelector("#harvestList");
    let harvestHTMLRepresentation = "";
    for(const oneThingFromTheAgenda of allHarvest){
        harvestHTMLRepresentation += Harvest(oneThingFromTheAgenda);
        console.log("harvestHTMLRepresentations", harvestHTMLRepresentation);
    }

    DOMHarvest.innerHTML += harvestHTMLRepresentation;

}