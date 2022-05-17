import { Item, Name, Delete } from './ContactItem.styled'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import { deleteContacts } from 'redux/contactsOperation';
export const ContactItem = ({ name, number, id}) => {
    const dispatch = useDispatch();  
    return (
        <Item>
            <Name>{name}:</Name>
            <>{number}</>
            <Delete onClick={() => {
                dispatch(deleteContacts(id))
            }}>Delete</Delete>
            </Item>
    )
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}