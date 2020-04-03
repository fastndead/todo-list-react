let nextId = 0;

export const addNote = (text) => ({
  type: 'ADD_NOTE',
  id: nextId++,
  text,
});

export const deleteNote = (id) => ({
  type: 'DELETE_NOTE',
  id,
});

export const editNote = ({ id, text }) => ({
  type: 'EDIT_NOTE',
  text,
  id,
});

export const markNote = (id) => ({
  type: 'MARK_NOTE',
  id,
});
