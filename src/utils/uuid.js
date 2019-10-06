const uuidv4 = require('uuid/v4');


const createUUID = () => {
    return uuidv4().replace(/-/g, ""); 
}

export default {createUUID}