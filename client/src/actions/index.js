import filledForm from '../apis';

// post actions, responses
export const sendForm = formValues => async dispatch => {
    filledForm.post('/form', formValues)
    .then( 
        (response) => { window.alert(`${response.status}: ${response.data.message}`); },
        (error) => { window.alert(`There was an error while sending data. Please check if server is running on port 3001. ${error}`) }
    );
};