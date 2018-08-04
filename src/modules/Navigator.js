
function getCurrentPosition () {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log('position of user', position)                
            const initialPosition = JSON.stringify(position);

            // No, better to Redux
            // this.setState({ initialPosition });
    
            const latlng = {
                latitude: position.coords.latitude,
                longitutde: position.coords.longitutde
            }
            // Action to Set it in Redux & Firebase...
        },
        (error) => alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
}


// Invokes the success callback whenever the location changes. Returns a watchId (number).
function watchPosition () {
    console.log('watch position ***')
    this.watchId = navigator.geolocation.watchPosition(
        (position) => {
            console.log('position of watched user', position)                
            // TODO - Firebase call
            const latlng = {
                latitude: position.coords.latitude,
                longitutde: position.coords.longitutde
            }
        },
        (error) => alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
      );
}


export { getCurrentPosition, watchPosition }