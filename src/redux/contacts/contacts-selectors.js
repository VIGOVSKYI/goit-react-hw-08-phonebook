export const getAllContacts = ({ contacts }) => contacts.items;

export const getFilteredContact = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  };

  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(({ name, phone }) => {
    return (name.toLowerCase().includes(normalizedFilter) || phone.toLowerCase().includes(normalizedFilter))
  })

  return result;
};
