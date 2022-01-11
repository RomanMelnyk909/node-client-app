
import * as yup from 'yup';

export const AddCarSchema = yup.object({
    name: yup.string().required('Поле не може бути пустим'),
    surName: yup.string().required('Поле не може бути пустим'),
    email: yup.string().required('Поле не може бути пустим'),
    
})