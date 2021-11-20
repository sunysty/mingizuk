import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCharacterAPI, postCharacterAPI } from '../../shared/api'
import { history } from '../store'

export const getCharacterMD = createAsyncThunk(
    'character/get',
    async (data, thunkAPI) => {
        try {
            const response = await getCharacterAPI()
            if (response) {
                console.log('>>getCharacterAPI 리스폰스', response)
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const postCharacterMD = createAsyncThunk(
    'character/post',
    async (data, thunkAPI) => {
        try {
            console.log('<<', data)
            const response = await postCharacterAPI()
            if (response) {
                console.log('<<', response)
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)