import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducer/index'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'spe-commerce',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)

export default { store, persistor} 