import * as ACTION from "./actionCreate"

const setAllUnread = ( id ) => {
    return {
        type: ACTION.DECREMENT_ALL_NOTIFY,
        id
    }
}

const setSingleUnread = ( id ) => {
    return {
        type: ACTION.SET_SINGLE_NOTIFY,
        id
    }
}

export { setAllUnread,setSingleUnread }