import {useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
function HomePage() {
    const { characters, loadingCharacters, errorCharacters } = useSelector((state) => state.characters);
    const { skills, loadingSkills, errorSkills } = useSelector((state) => state.skills);

    let navigate = useNavigate();

    const handleRedirect = (character) => {
        navigate(`/character/${character._id}`);
    }

    const handleRedirectComp = (skill) => {
        navigate(`/skill/${skill._id}`);
    }

    return (
        <div>
            <h2>Personnages</h2>
            {
                loadingCharacters==="pending" && <p>Chargement en cours...</p>
            }
            {
                errorCharacters && <p>Une erreur est survenue: {errorCharacters}</p>
            }
            <ul>
                {characters.map((character, index) => (
                    <li key={index}><p onClick={() => handleRedirect(character)}>{character.prenom} {character.nom}</p></li>
                ))}
            </ul>

            <h2>Compétences</h2>
            {
                loadingSkills==="pending" && <p>Chargement en cours...</p>
            }
            {
                errorSkills && <p>Une erreur est survenue: {errorCharacters}</p>
            }
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}> <p onClick={() => handleRedirectComp(skill)}>{skill.nomDeCompetence}</p></li>
                     ))
                }
            </ul>
        </div>
    );
}

export default HomePage;
