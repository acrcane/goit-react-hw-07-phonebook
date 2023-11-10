import PropTypes from "prop-types";
import { SearchList, ContactItem, Text, Button } from "./ContactListItem.styled";
import { useDispatch } from "react-redux";
// import { deleteContacts } from "redux/contactsSlice";
import { deleteContact } from "redux/operations";


export const ContactListItem = ({ renderListItem: { id, name, phone } }) => {

    const dispatch = useDispatch();
  
    return ( 
  
      <ContactItem key={id}>
        <SearchList>
          <Text>{name}:</Text>
          <Text>{phone}</Text>
        </SearchList>
        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </Button>
      </ContactItem> 
       
    );
};
  
ContactListItem.propTypes = {
    renderListItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
};

// export const ContactListItem = ({ renderListItem: { id, name, number } }) => {

//   const dispatch = useDispatch();

//   return ( 

//         <ContactItem key={id}>
//         <SearchList>
//             <Text>{name}:</Text>
//             <Text>{number}</Text>
//         </SearchList>
//         <Button type="button" onClick={() => dispatch(deleteContacts(id))}>
//             Delete
//         </Button>
//         </ContactItem> 
        
//     );
// };

// ContactListItem.propTypes = {
//     renderListItem: PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     }).isRequired,
// };