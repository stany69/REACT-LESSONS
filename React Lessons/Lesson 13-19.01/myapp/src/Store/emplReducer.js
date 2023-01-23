const defaultState = {
    empl: [
        {id: 1, name: 'ALex'},
        {id: 2, name: 'Steven'},
        {id: 3, name: 'Neena'}
    ]
}

const ADD_EMPL = 'ADD_EMPL'
const REM_EMPL = 'REM_EMPL'
const REM_EMPL_BY_ID = 'REM_EMPL_BY_ID'

export const emplReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_EMPL:
            return {...state, empl: [...state.empl, {id: Date.now(), name: action.payload}]}
        case REM_EMPL:
            return {...state, empl: state.empl.slice(0,state.empl.length-1)}
        case REM_EMPL_BY_ID:
            return {...state,empl: state.empl.filter(state.empl.id != id)}
        default:
            return state
    } 
}

export const addEmplAction = (payload) => ({type: ADD_EMPL, payload})
export const remEmplAction = () => ({type: REM_EMPL})
export const remEmplByIdAction = () => ({type: REM_EMPL_BY_ID})