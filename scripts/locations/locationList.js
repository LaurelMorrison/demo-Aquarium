import { getLocation } from "./locationData.js";
import { Location } from "./location.js";

export const locationList = () => {
    const allLocations = getLocation();
    const DOMLocation = document.querySelector("#locationList");
    let locationHTMLRepresentation = "";
    for(const oneThingFromTheStore of allLocations){
        locationHTMLRepresentation += Location(oneThingFromTheStore);
        console.log("locationHTMLRepresentations", locationHTMLRepresentation);
    }

    DOMLocation.innerHTML += locationHTMLRepresentation;

}