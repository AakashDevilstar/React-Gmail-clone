import {configureStore} from '@reduxjs/toolkit'
import mailSlice from './mailSlice'
import userSlice from './userSlice'

export default configureStore({
    reducer:{
        mail:mailSlice,
        user:userSlice,
    }
})