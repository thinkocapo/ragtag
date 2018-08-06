import { AsyncStorage } from "react-native"


function getItem () {

}

function getItems () {

}

// '@MySuperStore:key', 'I like to save it.'
// for now: key,value user@<id> <id>
async function setItem (key, value) {
    console.log('AsyncStorage setItem ... key,value', key, value)
    try {
        await AsyncStorage.setItem(key, value);
        return
    } catch (error) {console.log('ERROR AsyncStorage setItem', error)}
}

function setItems () {

}

export { getItem, setItem }