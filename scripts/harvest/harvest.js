export const Harvest = (harvestObj) => {
    return (
        `<article class="harvest-card">
        <div><img class="harvest-image" src="images/harvest/${harvestObj.image}" /></div>
        <h3 class="harvest-name">${harvestObj.harvestDestinations}</h3>
        <p class="harvest-details">Next trip: ${harvestObj.nextTrip}</p>
        </article>`
    )
};