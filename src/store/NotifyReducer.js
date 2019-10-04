import * as ACTION from "./actionCreate"

const initState = [
    {
        id:1,
        title: 'Ant Design Title 1',
        isRead: false
    },
    {
        id:2,
        title: 'Ant Design Title 2',
        isRead: false
    },
    {
        id:3,
        title: 'Ant Design Title 3',
        isRead: false
    },
    {
        id:4,
        title: 'Ant Design Title 4',
        isRead: false
    },
    {
        id:5,
        title: 'Ant Design Title 5',
        isRead: false
    }
];
   


const notifyReducer = function ( state = initState, action){
    
    switch ( action.type) {
        case ACTION.DECREMENT_ALL_NOTIFY:
            return state.map( item => {
                item.isRead = true
                return item
            });
            // Object.assign({},state,{
            //     unreadNum:0
            // });
    
        case ACTION.SET_SINGLE_NOTIFY:
            return state.map( item => {
                if (action.id === item.id ) {
                    item.isRead = true
                }
                return item
            });
        default:
            return state;
    }
}

export default notifyReducer;