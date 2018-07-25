// Cant return undefined in Redux, but can returned null
export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload
        default:
            return state
    }
}