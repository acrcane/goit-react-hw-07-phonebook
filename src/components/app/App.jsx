import React from 'react';
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/filter";
import { useDispatch, useSelector } from "react-redux";
import { Box, Text } from './App.style';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from "react";
import { fetchContacts } from 'redux/operations';

const App = () => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <Box>             
                <Text>Phonebook</Text>
                <ContactForm />
            </Box>
            <Box>
                {error && <p>{error}</p>} 
                {isLoading
                    ? <Text>Loading...</Text>
                    : (
                        <>
                            <Text>Contacts</Text>
                            <Filter />
                            <ContactList />
                        </>
                    )
                }
            </Box>
        </>
    );
};

export default App;