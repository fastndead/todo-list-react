import React from 'react';
import { connect } from 'react-redux';

import Note from '../Note/Note';
import './NoteList.scss';

const NoteList = ({ notes }) => (
  <div className="note-list">
    {notes.map((note) => (
      <Note note={note} key={note.id} />
    ))}
  </div>

);

const mapStateToProps = (state) => ({
  notes: state,
});


export default connect(
  mapStateToProps,
)(NoteList);
