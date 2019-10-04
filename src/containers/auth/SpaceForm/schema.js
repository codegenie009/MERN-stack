import { object, string } from 'yup';

export default object().shape({
  name: string().required('Memorial name is required'),
  description: string(),
  image: string().required('Photo is required')
});
