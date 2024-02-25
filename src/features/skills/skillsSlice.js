import { createSlice } from '@reduxjs/toolkit'
import { fetchSkills } from '../../api/skillsApi';

export const skillsSlice = createSlice({
    name: 'skills',
    initialState: {
        skills: [],
        loadingSkills: 'idle',
        errorSkills: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSkills.pending, (state) => {
                state.loadingSkills = 'pending';
            })
            .addCase(fetchSkills.fulfilled, (state, action) => {
                state.loadingSkills = 'succeeded';
                state.skills = action.payload;
            })
            .addCase(fetchSkills.rejected, (state, action) => {
                state.loadingSkills = 'failed';
                state.errorSkills = action.payload;
            });
    },
})

export const getSkillsName = (state) => state.skills.skills.map(skill => skill.nomDeCompetence);
export const selectSkillById = (state, skillId) => state.skills.skills.find(skill => skill._id === skillId);
export default skillsSlice.reducer