import React from 'react';
import { connect } from 'react-redux';
import { markNote, deleteNote } from '../../redux/actions/actions';
import './Note.scss';

const Note = ({ note, markNote, deleteNote }) => {
  const handleMark = () => markNote(note.id);
  const handleDelete = () => deleteNote(note.id);

  return (
    <div className="note-wrapper">
      <div className="note-container">
        <button
          type="button"
          className={`note-mark ${note.marked ? 'note-mark_marked' : ''}`}
          onClick={handleMark}
        />
        <div contentEditable className="note-text">
          {note.text}
        </div>
        <button
          type="button"
          className="note-delete"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>

  );
};

const mapDispatchToProps = (dispatch) => ({
  markNote: (id) => dispatch(markNote(id)),
  deleteNote: (id) => dispatch(deleteNote(id)),
});

export default connect(null, mapDispatchToProps)(Note);
