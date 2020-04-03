import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../../redux/actions/actions';
import { ReactComponent as SubmitSvg } from '../../assets/submit.svg';
import './NoteForm.scss';

const NoteForm = ({ dispatch }) => {
  let input;

  const handleClick = () => {
    if (!input.value.trim()) {
      return;
    }
    dispatch(addNote(input.value));
    input.value = '';
  };

  return (
    <div className="note-form">
      <h1 className="note-form__heading">What&apos;s on your mind?</h1>
      <textarea rows="4" cols="50" placeholder="Enter your notes here..." className="note-form__input" ref={(node) => { input = node; }} />
      <div className="note-form__button-container">
        <button onClick={handleClick} type="button" className="note-form__button">
          Add
          <SubmitSvg className="note-form__button-svg" />
        </button>
      </div>
    </div>
  );
};

export default connect()(NoteForm);
