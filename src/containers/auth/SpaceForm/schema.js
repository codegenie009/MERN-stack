import { object, string } from 'yup';

export default object().shape({
  name: string().required('Space name is required'),
  slug: string().required('Space url is required')
});
