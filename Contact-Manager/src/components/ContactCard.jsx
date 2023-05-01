import React from "react";
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div>
        <Avatar>{name[0].toUpperCase()}</Avatar>
        <div>
            <div>{name}</div>
            <div>{email}</div>
        </div>
      <DeleteIcon onClick={() => props.clickHander(id)}/>
    </div>
  );
};

export default ContactCard;