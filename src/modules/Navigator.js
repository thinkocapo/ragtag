
export function getCurrentPosition () {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log('position::', position)                
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

// TRY
// const getCurrentPosition = function () {}
// export { getCurrentPosition}