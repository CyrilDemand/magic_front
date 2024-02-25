import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { handleRang } from '../features/characters/charactersFunctions';
import { characterModel } from '../features/characters/characterModel';
import { addCharacter } from '../api/charactersApi';
import { useDispatch, useSelector } from 'react-redux';
import { selectCharacterById } from '../features/characters/charactersSlice';
import { getSkillsName } from '../features/skills/skillsSlice';
import {
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
} from '@mui/material';

const Form = () => {
    const [title, setTitle] = useState('Ajouter Personnage');
    const [personnage, setPersonnage] = useState(characterModel);
    const dispatch = useDispatch();
    const { id } = useParams();
    const character = useSelector((state) =>
        id ? selectCharacterById(state, id) : undefined
    );
    const skillsNameList = useSelector((state) => getSkillsName(state));

    const handleChangeAttribut = (e) => {
        const { name, value } = e.target;
        setPersonnage({
            ...personnage,
            attributs: {
                ...personnage.attributs,
                [name]: parseInt(value, 10),
            },
        });
    };

    const handleChangeCompetences = (e) => {
        const { name, value } = e.target;
        setPersonnage({
            ...personnage,
            competences: {
                ...personnage.competences,
                [name]: value.split(','),
            },
        });
    };

    const handleChangeGuildes = (e) => {
        const { name, value } = e.target;
        setPersonnage({
            ...personnage,
            guildes: {
                ...personnage.guildes,
                [name]: value,
            },
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'quantiteMana') {
            setPersonnage((prevState) => ({
                ...prevState,
                quantiteMana: parseInt(value, 10),
                rang: handleRang(value),
            }));
        } else if (
            ['autresPrenoms', 'autresNoms', 'titres', 'benedictions', 'maledictions'].includes(
                name
            )
        ) {
            setPersonnage({ ...personnage, [name]: value.split(',') });
        } else {
            setPersonnage({ ...personnage, [name]: value });
        }
    };

    useEffect(() => {
        setPersonnage((prevState) => ({
            ...prevState,
            rang: handleRang(prevState),
        }));
        if (character) {
            setPersonnage(character); // Met à jour le personnage si trouvé
            setTitle('Modifier Personnage : ' + character.prenom + ' ' + character.nom);
        } else {
            setPersonnage(characterModel); // Réinitialise le formulaire si aucun ID ou personnage non trouvé
            setTitle('Ajouter Personnage');
        }
    }, [id, character]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(addCharacter(personnage));
    };

    return (
        <form>
            <h1>{title}</h1>
            <div>
                <Toaster position="top-center" reverseOrder={false} />
            </div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="prenom"
                        label="Prénom"
                        value={personnage.prenom}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="nom"
                        label="Nom"
                        value={personnage.nom}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="autresPrenoms"
                        label="Autres Prénoms"
                        value={personnage.autresPrenoms.join(',')}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="autresNoms"
                        label="Autres Noms"
                        value={personnage.autresNoms.join(',')}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="alias"
                        label="Alias"
                        value={personnage.alias}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="anniversaire"
                        label="Anniversaire"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={personnage.anniversaire.slice(0, 10)}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Sexe</InputLabel>
                        <Select
                            name="sexe"
                            value={personnage.sexe}
                            onChange={handleChange}
                            label="Sexe"
                        >
                            <MenuItem value="">
                                <em>Sélectionnez le Sexe</em>
                            </MenuItem>
                            <MenuItem value="H">Homme</MenuItem>
                            <MenuItem value="F">Femme</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="race"
                        label="Race"
                        value={personnage.race}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="origine"
                        label="Origine"
                        value={personnage.origine}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="niveau"
                        label="Niveau"
                        type="number"
                        value={personnage.niveau}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Catégorie de Taille</InputLabel>
                        <Select
                            name="tailleCategorie"
                            value={personnage.tailleCategorie}
                            onChange={handleChange}
                            label="Catégorie de Taille"
                        >
                            <MenuItem value="">
                                <em>Sélectionnez la Catégorie de Taille</em>
                            </MenuItem>
                            <MenuItem value="S">S</MenuItem>
                            <MenuItem value="M">M</MenuItem>
                            <MenuItem value="L">L</MenuItem>
                            <MenuItem value="XL">XL</MenuItem>
                            <MenuItem value="XXL">XXL</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                {
                    Object.keys(personnage.attributs).map((attribut, index) => (
                        <Grid item xs={4} key={index}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                name={attribut}
                                label={attribut.charAt(0).toUpperCase() + attribut.slice(1)}
                                type="number"
                                value={personnage.attributs[attribut]}
                                onChange={handleChangeAttribut}
                            />
                        </Grid>
                    ))
                }
                <Grid item xs={12} style={{ height: '0px' }} />
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="tailleCm"
                        label="Taille en cm"
                        type="number"
                        value={personnage.tailleCm}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="quantiteMana"
                        label="Quantité de Mana"
                        type="number"
                        value={personnage.quantiteMana}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="rang"
                        label="Rang"
                        value={personnage.rang}
                        InputLabelProps={{ shrink: true }}
                        disabled
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="element1"
                        label="Élément 1"
                        value={personnage.element1}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="element2"
                        label="Élément 2"
                        value={personnage.element2}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="element3"
                        label="Élément 3"
                        value={personnage.element3}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="element4"
                        label="Élément 4"
                        value={personnage.element4}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="type"
                        label="Type"
                        value={personnage.type}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="frequenceOmana"
                        label="Fréquence Omana"
                        type="number"
                        value={personnage.frequenceOmana}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="titres"
                        label="Titres"
                        value={personnage.titres.join(',')}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="benedictions"
                        label="Benedictions"
                        value={personnage.benedictions.join(',')}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="maledictions"
                        label="Maledictions"
                        value={personnage.maledictions.join(',')}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="actives"
                        label="Compétences Actives"
                        value={personnage.competences.actives.join(',')}
                        onChange={handleChangeCompetences}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="passives"
                        label="Compétences Passives"
                        value={personnage.competences.passives.join(',')}
                        onChange={handleChangeCompetences}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="familia"
                        label="Familia"
                        value={personnage.familia}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="principale"
                        label="Guildes Principale"
                        value={personnage.guildes.principale}
                        onChange={handleChangeGuildes}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="secondaire"
                        label="Guildes Secondaire"
                        value={personnage.guildes.secondaire}
                        onChange={handleChangeGuildes}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="situationFamiliale"
                        label="Situation Familiale"
                        value={personnage.situationFamiliale}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Ajouter Personnage
            </Button>
        </form>
    );
};

export default Form;
