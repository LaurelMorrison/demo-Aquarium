export const Tip = (tipObj) => {
    return (
        `<article class="tip-card">
        <h3 class="tip-type">${tipObj.tipCategory}:</h3>
        <ul>
            <li class="tip-details"> ${tipObj.tipOne}</li>
            <li class="tip-details"> ${tipObj.tipTwo} inches</li>
            <li class="tip-details"> ${tipObj.tipThree}</li>
        </ul>
        </article>`
    )
}