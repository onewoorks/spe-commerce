const global_state = {
    header_mobile_menu: false,
    breadcrumbs: [
        { group:'root', uri:'/', name: 'Home'}
    ]
}

const append_breadcrumb = (payload) => {
    let breadcrumb = global_state.breadcrumbs
    switch (payload.group){
        case 'catalog':
            breadcrumb.push({
                uri: '/catalog',
                name: 'Koleksi'
            })
            break;
        default: break;
    }
    breadcrumb.push(payload)
    return breadcrumb
}

const globalReducer = (state = global_state, action = {}) => {
    if (action.type === 'UPDATE_BREADCRUMB'){
        return {
            ...state,
            // breadcrumbs: append_breadcrumb(action.payloads.breadcrumb)
        }
    }
    return state
}

export default globalReducer