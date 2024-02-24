import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './features/characters/charactersSlice';
import skillsReducer from './features/skills/skillsSlice';
export default configureStore({
    reducer: {
        characters: charactersReducer,
        skills: skillsReducer,
    },
})