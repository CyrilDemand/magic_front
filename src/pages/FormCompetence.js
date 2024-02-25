import React, {useEffect, useState} from 'react';
import '../resources/css/form.css';
import {useParams} from "react-router-dom";
import {skillModel} from "../features/skills/skillModel";
import {useDispatch, useSelector} from "react-redux";
import {selectSkillById} from "../features/skills/skillsSlice";
import {addSkills} from "../api/skillsApi";
import { Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, Switch, FormGroup, FormControlLabel } from '@mui/material';

const FormCompetence = () => {
    const [title, setTitle] = useState('Ajouter une compétence');
    const [skill, setSkill] = useState(skillModel);
    const dispatch = useDispatch();
    const { id } = useParams();
    const skillById = useSelector(state => id ? selectSkillById(state, id) : undefined);


    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        const newValue = name === "actif" ? checked : value;
        setSkill(prevState => ({
            ...prevState,
            [name]: newValue
        }));
    };



    useEffect(() => {
        if (skillById) {
            setSkill(skillById); // Met à jour le personnage si trouvé
            setTitle('Modifier compétence : ' + skillModel.nomDeCompetence);
        } else {
            setSkill(skillModel); // Réinitialise le formulaire si aucun ID ou personnage non trouvé
            setTitle('Ajouter une compétence');
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(addSkills(skill));
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>{title}</h1>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="nomDeCompetence"
                        label="Nom de Compétence"
                        value={skill.nomDeCompetence}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="description"
                        label="Description"
                        value={skill.description}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="tier"
                        label="Tier (1 à 15)"
                        type="number"
                        value={skill.tier}
                        onChange={handleChange}
                        inputProps={{ min: "1", max: "15" }}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Famille de Magie</InputLabel>
                        <Select
                            name="familleDeMagie"
                            value={skill.familleDeMagie}
                            onChange={handleChange}
                            label="Famille de Magie"
                            required
                        >
                            <MenuItem value="">Sélectionnez la famille de magie</MenuItem>
                            <MenuItem value="élémentaire">élémentaire</MenuItem>
                            <MenuItem value="Ethérée">Ethérée</MenuItem>
                            <MenuItem value="Réaliste">Réaliste</MenuItem>
                            <MenuItem value="Surréaliste">Surréaliste</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="element"
                        label="Élément"
                        value={skill.element}
                        onChange={handleChange}
                        disabled={skill.familleDeMagie === ''}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="classe"
                        label="Classe"
                        value={skill.classe}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="rang"
                        label="Rang"
                        value={skill.rang}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="type"
                        label="Type"
                        value={skill.type}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="coutEnMana"
                        label="Coût en Mana"
                        type="number"
                        value={skill.coutEnMana}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl component="fieldset">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={skill.actif}
                                        onChange={handleChange}
                                        name="actif"
                                        color="primary"
                                    />
                                }
                                label={skill.actif ? "La compétence est active" : "La compétence est passive"}
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" type="submit">
                Ajouter
            </Button>
        </form>
    );
};

export default FormCompetence;
