export const Location = (locationObj) => {
    return (
        `<article class="location-card">
        <h3 class="location-type">${locationObj.locationName}:</h3>
        <ul>
            <li class="location-details">Address: ${locationObj.Address}</li>
            <li class="location-details">City: ${locationObj.City} </li>
            <li class="location-details">State: ${locationObj.State}</li>
            <li class="location-details">Zipcode: ${locationObj.Zipcode}</li>
        </ul>
        </article>`
    )
}