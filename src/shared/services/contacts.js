import instance from './auth';

export const getСontacts = async () => {
  const { data } = await instance.get('/contacts');
  console.log('data', data);
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
