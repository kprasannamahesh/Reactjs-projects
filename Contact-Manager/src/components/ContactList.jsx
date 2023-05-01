import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList =(props)=>{

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  console.log('hi',props.contacts);

  return (
      <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {props.contacts.map((contact) =>(<TableRow
          key={contact.id}
        >
            <TableCell>
            <Avatar>{contact.name[0].toUpperCase()}</Avatar>
            </TableCell>
            <TableCell>
              {contact.name}        
            </TableCell>
            <TableCell>
              {contact.email}
            </TableCell>
            <TableCell>
            <DeleteIcon onClick={() => deleteConactHandler(contact.id)}/>
            </TableCell>
          </TableRow>))}
        </TableBody>

      </Table>
      </TableContainer>
      </>
    );
};


export default ContactList;