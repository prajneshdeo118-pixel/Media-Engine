import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: JSON.parse(localStorage.getItem("collection")) || []
}
const collectionSlice = createSlice({
    name: "collections",
    initialState,
    reducers: {
        addtoCollections: (state, action) => {
            const AlreadyExists = state.items.find(item => item.id == action.payload.id)
            if (!AlreadyExists) {
                state.items.push(action.payload)
                localStorage.setItem("collection", JSON.stringify(state.items))
            }
        },
        removeCollection:(state,action)=>{
            state.items=state.items.filter(
                item=>item.id !=action.payload
            )
            localStorage.setItem('collection',JSON.stringify(state.items))
        },
        clearCollections:(state,action)=>{
            state.items=[]
            localStorage.removeItem('collection')
        }
    }
})
export const {addtoCollections,removeCollection,clearCollections}=collectionSlice.actions
export default collectionSlice.reducer
