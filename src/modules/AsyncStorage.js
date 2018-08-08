import { AsyncStorage } from "react-native"


async function asyncGetData (key) {
    try {
        // console.log("asyncGetData key", key)
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          // console.log('asyncGetData value retrieved', value);
          return value
        } else {
          console.log('asyncGetData VALUE NOT FOUND');
          return unll
        }
       } catch (error) {
         console.log('ERROR asyncGetData');
       }
}

function asyncGetItems () {

}

// '@MySuperStore:key', 'I like to save it.'
// for now: key,value user@<id> <id>
async function asyncSetData (key, value) {
    console.log('AsyncStorage setItem ... key,value', key, value)
    try {
        await AsyncStorage.setItem(key, value);
        return
    } catch (error) {console.log('ERROR AsyncStorage setItem', error)}
}

function asyncSetItems () {

}

export { asyncGetData, asyncSetData }