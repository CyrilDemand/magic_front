import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {toast} from "react-hot-toast";
import {fetchCharacters} from "./charactersApi";

export const fetchSkills = createAsyncThunk(
    'skills/fetchSkills',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:3000/competences');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const addSkills = createAsyncThunk(
    'skills/addSkill',
    async (skill, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3000/competence', skill);
            toast.success(response.data);
            dispatch(fetchSkills());
            return response.data;
        } catch (error) {
            toast.error(error.response.data)
            return rejectWithValue(error.response.data);
        }
    }
);