import React from "react";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import MyTable from "./MyTable";
export default function SubHomePage({ data, loadingCharacters, errorCharacters,
                                             handleEditCharacter, handleDeleteConfirm,
                                         title, addButtonLink, addButtonLabel, columns}) {
    return (
        <div>
            <h2>{title}</h2>
            {loadingCharacters === "pending" && <p>Chargement en cours...</p>}
            {errorCharacters && <p>Une erreur est survenue: {errorCharacters}</p>}
            <Button component={Link} to={addButtonLink} variant="contained"
                    style={{ marginLeft: 'auto', backgroundColor: '#4caf50' }}>{addButtonLabel}</Button>

            <MyTable
                columns={columns}
                data={data}
                handleEdit={handleEditCharacter}
                handleDeleteConfirm={handleDeleteConfirm}
            />
        </div>
    );
}