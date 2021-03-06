const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,


};
const getTotalPrice=arr=>arr.reduce((sum,obj)=>obj.price+sum,0);




const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART':{
            const currentPizzaItems=!state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems={
                ...state.items,
            [action.payload.id] : {
                    items:currentPizzaItems,
                totalPrice: getTotalPrice(currentPizzaItems)


            }
            };
            const items= Object.values(newItems).map(obj=>obj.items);
            const allPizzas=[].concat.apply([],items);
            const totalPrice=getTotalPrice(allPizzas)
            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice,
            }

            }
        case 'REMOVE_CART_ITEM': {
            const newItems = {
                ...state.items
            }
            const currentTotalPrice=newItems[action.payload].totalPrice
            const currentTotalCount=newItems[action.payload].items.length
            delete newItems[action.payload];

            return {
                ...state,
                items: newItems,
                totalPrice:state.totalPrice - currentTotalPrice,
                totalCount:state.totalCount -currentTotalCount


            }
        }

        case 'CLEAR_CART':
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }
        case 'PLUS_CART_ITEM':{
            const newObjItems =[...state.items[action.payload].items,
                state.items[action.payload].items[0]]
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };
            const TotalPrice=newItems[action.payload].totalPrice
            const TotalCount=newItems[action.payload].items.length


            return {
                ...state,
                items: newItems,
                totalCount:TotalCount,
                totalPrice:TotalPrice,
            };
        }

        case 'MINUS_CART_ITEM':{
            const oldItems=state.items[action.payload].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };
            const TotalPrice=newItems[action.payload].totalPrice
            const TotalCount=newItems[action.payload].items.length
            return {
                ...state,
                items: newItems,
                totalCount:TotalCount,
                totalPrice:TotalPrice,
            };
        }




        default:
            return state;



    }};

export default cart;
