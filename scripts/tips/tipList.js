import { getTip } from "./tipData.js";
import { Tip } from "./tip.js";

export const tipList = () => {
    const allTips = getTip();
    const DOMTip = document.querySelector("#tipList");
    let tipHTMLRepresentation = "";
    for(const oneThingFromTheBrain of allTips){
        tipHTMLRepresentation += Tip(oneThingFromTheBrain);
        console.log("tipHTMLRepresentations", tipHTMLRepresentation);
    }

    DOMTip.innerHTML += tipHTMLRepresentation;

}