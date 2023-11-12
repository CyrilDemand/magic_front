import React, { useState } from 'react';
import '../ressources/css/form.css';
function Form() {
    const [userData, setUserData] = useState({
        prenom: '',
        nom: '',
        age: '',
        race: '',
        origine: '',
        force: '',
        endurance: '',
        mental: '',
        agilite: '',
        dexterite: '',
        perception: '',
        charisme: '',
        espoir: '',
        metier: '',
        magie: [],
        talents: [],
        tares: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleMultiSelectChange = (e) => {
        const { name, options } = e.target;
        const selectedValues = Array.from(options).filter(option => option.selected).map(option => option.value);
        setUserData({ ...userData, [name]: selectedValues });
    };

    return (
        <div className={"form-container"}>
            <form>
                <input type="text" name="prenom" value={userData.prenom} onChange={handleChange} placeholder="Prénom" />
                <input type="text" name="nom" value={userData.nom} onChange={handleChange} placeholder="Nom" />
                <input type="number" name="age" value={userData.age} onChange={handleChange} placeholder="Âge" />
                <input type="text" name="race" value={userData.race} onChange={handleChange} placeholder="Race" />
                <input type="text" name="origine" value={userData.origine} onChange={handleChange} placeholder="Origine" />
                <input type="number" name="force" value={userData.force} onChange={handleChange} placeholder="Force" />
                <input type="number" name="endurance" value={userData.endurance} onChange={handleChange} placeholder="Endurance" />
                <input type="number" name="mental" value={userData.mental} onChange={handleChange} placeholder="Mental" />
                <input type="number" name="agilite" value={userData.agilite} onChange={handleChange} placeholder="Agilité" />
                <input type="number" name="dexterite" value={userData.dexterite} onChange={handleChange} placeholder="Dextérité" />
                <input type="number" name="perception" value={userData.perception} onChange={handleChange} placeholder="Perception" />
                <input type="number" name="charisme" value={userData.charisme} onChange={handleChange} placeholder="Charisme" />
                <input type="number" name="espoir" value={userData.espoir} onChange={handleChange} placeholder="Espoir" />
                <input type="text" name="metier" value={userData.metier} onChange={handleChange} placeholder="Métier" />

                {/* Exemple pour les sélecteurs multiples */}
                <select multiple name="magie" value={userData.magie} onChange={handleMultiSelectChange}>
                    {/* Remplacer par vos options */}
                    <option value="magie1">Magie 1</option>
                    <option value="magie2">Magie 2</option>
                    {/* etc. */}
                </select>

                {/* Répétez pour talents et tares avec les options appropriées */}

                <button type="submit">Ajouter Utilisateur</button>
            </form>
        </div>

    );
}

export default Form;
