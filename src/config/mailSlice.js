import {createSlice} from '@reduxjs/toolkit'

export const mailSlice=createSlice({
    name:'mail',
    initialState:{
        selectedMail:[],
        sendMesageIsOpen:false,
    },
    reducers:{
        selectMail:(state,action)=>{
            state.selectedMail=action.payload;
        },
        openSendMessage:(state,action)=>{
            state.sendMesageIsOpen=true;
        },
        closeSendMessage:(state,action)=>{
            state.sendMesageIsOpen=false;
        },
    },
});

export const{openSendMessage,closeSendMessage,selectMail}=mailSlice.actions;

export const selectmail =(state)=> state.mail.sendMesageIsOpen;

export const selectSendMessageIsOpen=(state)=> state.mail.selectedMail;

export default mailSlice.reducer;