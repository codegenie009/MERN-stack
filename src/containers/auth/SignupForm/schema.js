import { object, string } from 'yup';

export default object().shape({
  password: string().required('Password is required'),
  firstName: string().required('First name is required'),
  lastName: string().required('Last name is required')
});
