// Cant return undefined in Redux, but can returned null
export default (state, action) => {
    console.log('state', state)
    console.log('action', action)
    return null
}