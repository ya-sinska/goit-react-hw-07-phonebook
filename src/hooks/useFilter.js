import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getFilterValue } from 'redux/contactsFilterSlice';
import { getItemsValue } from 'redux/contactsItemSlice';
import {fetchContacts} from '../redux/contactsOperation'
export const useFilter = () => {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(fetchContacts()) }, [dispatch]);

    const items = useSelector(getItemsValue);
    const filter = useSelector(getFilterValue);

    const filteredContacts = filter ? items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())) : items; 
    
    return filteredContacts;   
}