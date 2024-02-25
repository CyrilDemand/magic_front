import { createSlice } from '@reduxjs/toolkit'
import { fetchCharacters } from '../../api/charactersApi';

export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        characters: [],
        loadingCharacters: 'idle',
        errorCharacters: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.characters = action.payload;
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.payload;
            });
    },
})

export const selectCharacterById = (state, characterId) => state.characters.characters.find(character => character._id === characterId);
export default charactersSlice.reducer