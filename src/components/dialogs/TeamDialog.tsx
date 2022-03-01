import {
    Box,
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Paper,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead, TableRow
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import React, {ReactElement, useContext} from "react";
import {TeamRecord} from "../../interface/OrgChartModel";
import StaffContext, {StaffData} from "../../providers/StaffProvider";

const TeamDialog = ({open, team, closeDialog}: {open: boolean, team: TeamRecord, closeDialog: () => void}): ReactElement => {
    const {staff} = useContext<StaffData>(StaffContext);
    let iteration = 0;
    return (
        <Dialog open={open} onClose={closeDialog}>
            <DialogTitle>
                <div><strong>Team {team.name}</strong></div>
                <div className='team-location'>{team.location}</div>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>#</strong></TableCell>
                                    <TableCell><strong>Name</strong></TableCell>
                                    <TableCell><strong>Role</strong></TableCell>
                                    <TableCell><strong>Email ID</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {team.staff.map(staffId => (
                                    <TableRow key={staffId}>
                                        <TableCell>{++iteration}</TableCell>
                                        <TableCell>{staff[staffId]?.name}</TableCell>
                                        <TableCell>{staff[staffId]?.role}</TableCell>
                                        <TableCell><a href={`mailto:${staff[staffId]?.email}`}>{staff[staffId]?.email}</a></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Box p={2}>
                    <Button onClick={closeDialog} variant="contained" color="primary">Close</Button>
                </Box>
            </DialogActions>
        </Dialog>
    );
}

export default TeamDialog;
