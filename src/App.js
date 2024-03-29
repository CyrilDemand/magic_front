import Form from "./pages/Form";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormCompetence from "./pages/FormCompetence";
import {useEffect, useState} from "react";
import {fetchCharacters} from "./api/charactersApi";
import {fetchSkills} from "./api/skillsApi";
import {useDispatch} from "react-redux";
import Header from "./components/Header";
import "./App.css";
function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacters());
        dispatch(fetchSkills());
    }, [dispatch]);
    const [showCharacters, setShowCharacters] = useState(true); // State to track whether to display characters or skills


    return (
        <div>
            <Header setShowCharacters={setShowCharacters}/>
            <Routes>
                <Route path="/" element={<HomePage
                    showCharacters={showCharacters}
                />} />
                {/* Passer la référence au composant Form */}
                <Route
                    path="/character"
                    element={<Form />}
                />

                <Route
                    path="/character/:id"
                    element={<Form />}
                />

                <Route
                    path="/skill"
                    element={<FormCompetence />}
                />

                <Route
                    path="/skill/:id"
                    element={<FormCompetence />}/>
            </Routes>
        </div>
    );
}

export default App;
