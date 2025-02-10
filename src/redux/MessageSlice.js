import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    message:""
}
const MessageSlice = createSlice({
    name : "message",
    initialState,
    reducers: ({
        setMessage :(state, action) =>{
            state = action.payload;
        }
    })
})


export const setMessage = MessageSlice.actions
export default MessageSlice.reducer