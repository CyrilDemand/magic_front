import React, {useEffect, useState, forwardRef} from 'react';
import axios from 'axios';
import '../resources/css/form.css';
import {Toaster} from "react-hot-toast";
import { useParams } from 'react-router-dom';
import {handleRang} from "../features/characters/charactersFunctions";
import {characterModel} from "../features/characters/characterModel";
import {addCharacter} from "../api/charactersApi";
import {useDispatch, useSelector} from "react-redux";
import {selectCharacterById} from "../features/characters/charactersSlice";
import {getSkillsName} from "../features/skills/skillsSlice";

const Form = () => {
    const [title, setTitle] = useState('Ajouter Personnage');
    const [personnage, setPersonnage] = useState(characterModel);
    const dispatch = useDispatch();
    const { id } = useParams();
    const character = useSelector(state => id ? selectCharacterById(state, id) : undefined);
    const skillsNameList = useSelector(state => getSkillsName(state));

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
        // Mise à jour de l'état directement pour tous les champs sauf quantiteMana pour lequel on calcule aussi le rang
        if (name === 'quantiteMana') {
            // Pour quantiteMana, on met à jour la valeur directement ici
            setPersonnage(prevState => ({
                ...prevState,
                quantiteMana: parseInt(value, 10),
            }));
        }
        else if (['autresPrenoms', 'autresNoms', 'titres', 'benedictions', 'maledictions'].includes(name)) {
            setPersonnage({ ...personnage, [name]: value.split(',') });
        } else {
            setPersonnage({ ...personnage, [name]: value });
        }
    };


    useEffect(() => {
        setPersonnage(prevState => ({
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
    },  [id, character]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(addCharacter(personnage));
    };

    const tabToString = (tab) => {
        return tab.join(',');
    }

    return (
        <form>
            <h1>{title}</h1>
            <div><Toaster
                position="top-center"
                reverseOrder={false}
            /></div>
            <input type="text" name="prenom" placeholder="Prénom" onChange={handleChange} value={personnage.prenom}/>
            <input type="text" name="nom" placeholder="Nom" onChange={handleChange} value={personnage.nom}/>

            <input type="text" name="autresPrenoms" placeholder="Autres Prénoms"  onChange={handleChange} value={tabToString(personnage.autresPrenoms)}/>
            <input type="text" name="autresNoms" placeholder="Autres Noms" onChange={handleChange} value={tabToString(personnage.autresNoms)}/>

            <input type="text" name="alias" placeholder="Alias" onChange={handleChange} value={personnage.alias}/>

            {
                // le .slice(0, 10) permet de ne récupérer que la date sans l'heure "2002-06-02T00:00:00.000Z" => "2002-06-02"
            }
            <input type="date" name="anniversaire" placeholder="Anniversaire" onChange={handleChange} value={personnage.anniversaire.slice(0, 10) }/>

            <select name="sexe" onChange={handleChange} value={personnage.sexe}>
                <option value="">Sélectionnez le Sexe</option>
                <option value="H">Homme</option>
                <option value="F">Femme</option>
            </select>

            <input type="text" name="race" placeholder="Race" onChange={handleChange} value={personnage.race}/>
            <input type="text" name="origine" placeholder="Origine" onChange={handleChange} value={personnage.origine}/>

            <input type="number" name="niveau" placeholder="Niveau" onChange={handleChange} value={personnage.niveau}/>

            <select name="tailleCategorie" onChange={handleChange} value={personnage.tailleCategorie}>
                <option value="">Sélectionnez la Catégorie de Taille</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
            <input type="number" name="tailleCm" placeholder="Taille en cm" onChange={handleChange} value={personnage.tailleCm}/>

            {
                Object.keys(personnage.attributs).map((attribut, index) => (
                    <div>
                        <label key={index}>{attribut}</label>
                        <input
                            type="number"
                            name={attribut}
                            placeholder={attribut}
                            value={personnage.attributs[attribut]}
                            onChange={handleChangeAttribut}
                        />
                    </div>
                ))
            }

            <input type="number" name="quantiteMana" placeholder="Quantité de Mana" onChange={handleChange} />
            <p> rang : {personnage.rang}</p>
            <input type="text" name="element1" placeholder="Élément 1" onChange={handleChange} value={personnage.element1}/>
            <input type="text" name="element2" placeholder="Élément 2" onChange={handleChange}  value={personnage.element2}/>
            <input type="text" name="element3" placeholder="Élément 3" onChange={handleChange}  value={personnage.element3}/>
            <input type="text" name="element4" placeholder="Élément 4" onChange={handleChange}  value={personnage.element4}/>

            <input type="text" name="type" placeholder="Type" onChange={handleChange}  value={personnage.type}/>

            <input type="number" name="frequenceOmana" placeholder="frequenceOmana" onChange={handleChange}  value={personnage.frequenceOmana}/>


            <input type="text" name="titres" placeholder="Titres" onChange={handleChange}  value={tabToString(personnage.titres)}/>
            <input type="text" name="benedictions" placeholder="Benedictions" onChange={handleChange} value={tabToString(personnage.benedictions)}/>
            <input type="text" name="maledictions" placeholder="Maledictions" onChange={handleChange} value={tabToString(personnage.maledictions)}/>
            <input type="text" name="actives" placeholder="Compétences Actives" onChange={handleChangeCompetences} value={tabToString(personnage.competences.actives)}/>
            <input type="text" name="passives" placeholder="Compétences Passives" onChange={handleChangeCompetences} value={tabToString(personnage.competences.passives)}/>
            <input type="text" name="familia" placeholder="Familia" onChange={handleChange} value={personnage.familia} />

            <input type="text" name="principale" placeholder="Guildes Principale" onChange={handleChangeGuildes} value={personnage.guildes.principale}/>
            <input type="text" name="secondaire" placeholder="Guildes Secondaire" onChange={handleChangeGuildes} value={personnage.guildes.secondaire}/>
            <input type="text" name="situationFamiliale" placeholder="Situation Familiale" onChange={handleChange} value={personnage.situationFamiliale}/>

            <button type="submit" onClick={handleSubmit}>Ajouter Personnage</button>
        </form>
    );
};

export default Form;
