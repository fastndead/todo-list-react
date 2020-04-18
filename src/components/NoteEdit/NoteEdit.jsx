import React, { useState } from 'react';
import {
  useParams,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { editNote as editNoteAction } from '../../redux/actions/actions';
import { ReactComponent as SubmitSvg } from '../../assets/submit.svg';

const NoteEdit = ({ notes, editNote }) => {
  const { id } = useParams();

  const [inputValue, setInputValue] = useState(notes.find((note) => note.id === id).text);

  const handleClick = () => {
    editNote({ id, text: inputValue });
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="note-form">
      <textarea rows="4" cols="50" placeholder="Enter your notes here..." className="note-form__input" value={inputValue} onChange={handleChange} />
      <div className="note-form__button-container">
        <button onClick={handleClick} type="button" className="note-form__button">
          Save
          <SubmitSvg className="note-form__button-svg" />
        </button>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => ({
  notes: state,
});

const mapDispatchToProps = (dispatch) => ({
  editNote: (id) => dispatch(editNoteAction(id)),
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(NoteEdit);
