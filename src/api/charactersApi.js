import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {toast} from "react-hot-toast";

export const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:3000/personnages');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const addCharacter = createAsyncThunk(
    'characters/addCharacter',
    async (character, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3000/personnage', character);
            toast.success(response.data);
            dispatch(fetchCharacters());
            return response.data;
        } catch (error) {
            toast.error(error.response.data)
            return rejectWithValue(error.response.data);
        }
    }
);