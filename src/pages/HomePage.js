import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {deleteCharacter} from "../api/charactersApi";
import {deleteSkill} from "../api/skillsApi";
import SubHomePage from "../components/SubHomePage";
import DeleteConfirm from "../components/DeleteConfirm";
import {charactersTableColumns} from "../features/characters/charactersTableColumns";
import {skillsTableColumns} from "../features/characters/skillsTableColumns";

function HomePage({showCharacters}) {
    const { characters, loadingCharacters, errorCharacters } = useSelector((state) => state.characters);
    const { skills, loadingSkills, errorSkills } = useSelector((state) => state.skills);
    const navigate = useNavigate();
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    const dispatch = useDispatch();

    const handleEditCharacter = (character) => {
        navigate(`/character/${character._id}`);
    }

    const handleEditSkill = (skill) => {
        navigate(`/skill/${skill._id}`);
    }

    const handleDeleteConfirm = (item) => {
        if (item.nom) {
            setSelectedCharacter(item);
        } else if (item.nomDeCompetence) {
            setSelectedSkill(item);
        }
        setOpenDialog(true);
    }

    const handleDelete = () => {
        if (selectedCharacter) {
            dispatch(deleteCharacter(selectedCharacter._id));
        } else if (selectedSkill) {
            dispatch(deleteSkill(selectedSkill._id));
        }
        setOpenDialog(false);
    }

    return (
        <div id={"home_page"}>

            {
                showCharacters && (
                    <SubHomePage
                        data={characters}
                        loadingCharacters={loadingCharacters}
                        errorCharacters={errorCharacters}
                        handleEditCharacter={handleEditCharacter}
                        handleDeleteConfirm={handleDeleteConfirm}
                        title={"Personnages"}
                        addButtonLink={"/character"}
                        addButtonLabel={"Ajouter un personnage +"}
                        columns={charactersTableColumns}
                    />
                )
            }

            {
                !showCharacters && (
                   <SubHomePage
                        data={skills}
                        loadingSkills={loadingSkills}
                        errorSkills={errorSkills}
                        handleEditSkill={handleEditSkill}
                        handleDeleteConfirm={handleDeleteConfirm}
                        title={"Compétences"}
                        addButtonLink={"/skill"}
                        addButtonLabel={"Ajouter une compétence +"}
                        columns={skillsTableColumns}
                    />
                )
            }

            <DeleteConfirm
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
                handleDelete={handleDelete}
            />
        </div>
    );
}

export default HomePage;
