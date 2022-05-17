import { useForm } from "react-hook-form";
import {  useDispatch, useSelector } from 'react-redux'
import { getItemsValue } from "redux/contactsItemSlice";
import { addContacts } from "redux/contactsOperation";
export const useFormValues = () => {
        const { register, handleSubmit,reset, formState: { errors } } = useForm({
        defaultValues: {
            name:'',
            number:'+380'
        }
    });
    const dispatch = useDispatch();
    const stateItems = useSelector(getItemsValue);
    const onSubmit = (values) => {
        const item = {
            name: values.name ,
            number: values.number,
        } 
        const isIncludesName = stateItems.find(item => item.name.toLowerCase() === values.name.toLowerCase());
        if (isIncludesName) {
            alert(`${values.name.name} is already is contacts`);
            reset(); 
            return
        } else {dispatch(addContacts(item));}
        reset();
    };
    return{register, handleSubmit, errors, onSubmit }
}