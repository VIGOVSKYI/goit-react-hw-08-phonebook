export const getAllContacts = ({ contacts }) => contacts.items;

export const getFilteredContact = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  };

  const normalizedFilter = filter.toLocaleLowerCase();
  const result = contacts.items.filter(
    ({ name, phone }) =>
      name.toLocaleLowerCase().includes(normalizedFilter) ||
      phone.toLocaleLowerCase().includes(normalizedFilter)
  );
  return result;
};
