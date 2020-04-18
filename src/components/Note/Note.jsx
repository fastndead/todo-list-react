import React from 'react';
import { connect } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import { markNote, deleteNote } from '../../redux/actions/actions';
import './Note.scss';

const Note = ({ note, markNoteProps, deleteNoteProps }) => {
  // Animation Land
  const handleMark = () => markNoteProps(note.id);
  const handleDelete = () => deleteNoteProps(note.id);

  const markButtonProps = useSpring({ backgroundColor: note.marked ? '#34495E' : '#fff', color: note.marked ? '#fff' : '#34495E' });

  return (
    <div className="note-wrapper">
      <div
        className="note-container"
      >
        <div className="note-text">
          {note.text}
        </div>
        <div className="button-container">
          <animated.button
            type="button"
            className="note-mark"
            onClick={handleMark}
            style={markButtonProps}
          >
            Mark
          </animated.button>
          <button
            type="button"
            className="note-delete"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>

  );
};

const mapDispatchToProps = (dispatch) => ({
  markNoteProps: (id) => dispatch(markNote(id)),
  deleteNoteProps: (id) => dispatch(deleteNote(id)),
});

export default connect(null, mapDispatchToProps)(Note);
