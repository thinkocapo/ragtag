function getItem () {

}

function getItems () {

}

// '@MySuperStore:key', 'I like to save it.'
async function setItem (key, value) {
    console.log('setItem...1')
    try {
        await AsyncStorage.setItem(key, value);
        console.log('setItem...2')
        return
    } catch (error) {
        console.log('setItem...error', error)
        // Error saving data
    }
}

function setItems () {

}

export { getItem }