import React, {useEffect, useState} from 'react';
import '../resources/css/form.css';
import {useParams} from "react-router-dom";
import {skillModel} from "../features/skills/skillModel";
import {useDispatch, useSelector} from "react-redux";
import {selectSkillById} from "../features/skills/skillsSlice";
import {addSkills} from "../api/skillsApi";

const FormCompetence = () => {
    const [title, setTitle] = useState('Ajouter une compétence');
    const [skill, setSkill] = useState(skillModel);
    const dispatch = useDispatch();
    const { id } = useParams();
    const skillById = useSelector(state => id ? selectSkillById(state, id) : undefined);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setSkill(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        if (skillById) {
            setSkill(skillById); // Met à jour le personnage si trouvé
            setTitle('Modifier compétence : ' + skillModel.nomDeCompetence);
        } else {
            setSkill(skillModel); // Réinitialise le formulaire si aucun ID ou personnage non trouvé
            setTitle('Ajouter Personnage');
        }
    }, [id, skill]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(addSkills(skill));
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>{title}</h1>
            <input
                type="text"
                name="nomDeCompetence"
                value={skill.nomDeCompetence}
                onChange={handleChange}
                placeholder="Nom de Compétence"
                required
            />
            <textarea
                name="description"
                value={skill.description}
                onChange={handleChange}
                placeholder="Description"
                required
            />
            <input
                type="number"
                name="tier"
                value={skill.tier}
                onChange={handleChange}
                placeholder="Tier (1 à 15)"
                min="1"
                max="15"
                required
            />
            <select name="familleDeMagie" onChange={handleChange} value={skill.familleDeMagie} required>
                <option value="">Sélectionnez la famille de magie</option>
                <option value="élémentaire">élémentaire</option>
                <option value="Ethérée">Ethérée</option>
                <option value="Réaliste">Réaliste</option>
                <option value="Surréaliste">Surréaliste</option>
            </select>
            <input
                type="text"
                name="element"
                value={skill.element}
                onChange={handleChange}
                placeholder="Élément"
                disabled={skill.familleDeMagie === ''}
            />
            <input
                type="text"
                name="classe"
                value={skill.classe}
                onChange={handleChange}
                placeholder="Classe"
                required
            />
            <input
                type="text"
                name="rang"
                value={skill.rang}
                onChange={handleChange}
                placeholder="Rang"
                required
            />
            <input
                type="text"
                name="type"
                value={skill.type}
                onChange={handleChange}
                placeholder="Type"
                required
            />
            <input
                type="number"
                name="coutEnMana"
                value={skill.coutEnMana}
                onChange={handleChange}
                placeholder="Coût en Mana"
                required
            />
            <button type="submit" onClick={handleSubmit}>ajouter</button>
        </form>
    );
};

export default FormCompetence;
