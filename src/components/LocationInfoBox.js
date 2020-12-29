// LocationInfoBox component stores elements into { info }
// LocationInfoBox is then referenced in Map.js by an onClick inside the LocationMarker element
// Allows the below elements to be displayed when onClick event is triggered
const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event Loaction Info</h2>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>TITLE: <strong>{ info.title }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
