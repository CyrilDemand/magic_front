import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from "@mui/material";

const SkillTable = ({ data, handleEditSkill, handleDeleteConfirm, columns }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            columns.map((column, index) => (
                                <TableCell key={index}>{column.headerName}</TableCell>
                            ))
                        }
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((skill, index) => (
                        <TableRow key={index}>
                            {
                                columns.map((column, index) => (
                                    <TableCell key={index}>{skill[column.field]}</TableCell>
                                ))
                            }
                            <TableCell>
                                <Button
                                    variant="outlined"
                                    onClick={() => handleEditSkill(skill)}
                                >
                                    Modifier
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={() => handleDeleteConfirm(skill)}
                                >
                                    Supprimer
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SkillTable;
