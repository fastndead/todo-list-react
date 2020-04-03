const initialState = [
  { id: 'special', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corporis beatae quaerat.', marked: true },
  { id: 'special1', text: 'Eligendi, dignissimos neque! Quidem pariatur odit porro sint, atque, incidunt magnam sunt praesentium in doloremque odio commodi natus quas nam dignissimos vero!', marked: false },
];

const notes = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        {
          id: action.id,
          text: action.text,
          marked: false,
        },
        ...state,
      ];
    case 'MARK_NOTE':
      return state.map((note) => ((note.id === action.id)
        ? { ...note, marked: !note.marked }
        : note));
    case 'EDIT_NOTE':
      return state.map((note) => ((note.id === action.id)
        ? { ...note, text: action.text }
        : note));
    case 'DELETE_NOTE':
      return state.filter((note) => (note.id !== action.id));
    default:
      return state;
  }
};

export default notes;
