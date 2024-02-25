import React from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material';

const DeleteConfirm = ({ openDialog, setOpenDialog, handleDelete }) => {
    return (
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            <DialogTitle>Confirmation de suppression</DialogTitle>
                <DialogContent>
                    Êtes-vous sûr de vouloir supprimer cet élément ?
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Annuler</Button>
                    <Button onClick={handleDelete} color="error">Supprimer</Button>
                </DialogActions>
        </Dialog>
    );
};

export default DeleteConfirm;
