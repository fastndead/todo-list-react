import React, { Component } from 'react';
import { Transition } from 'react-spring/renderprops';
import { connect } from 'react-redux';
import './Notes.scss';
import {
  Link,
} from 'react-router-dom';
import { markNote, deleteNote } from '../../redux/actions/actions';

class Notes extends Component {
  handleMark = (id) => this.props.markNoteProps(id);

  handleDelete = (id) => this.props.deleteNoteProps(id);

  render() {
    return (
      <Transition
        items={this.props.notes}
        keys={(item) => item.id}
        from={{ height: 0, opacity: 0 }}
        enter={{ height: 'auto', opacity: 1}}
        leave={{ height: 0, opacity: 0 }}
      >
        {(note) => (props) => (
          <div style={props} className="note-wrapper" key={note.id}>
            <div className="note-container">
              <div>
                <div className="note-text">
                  {note.text}
                </div>
                <div className="button-container">
                  <button
                    type="button"
                    className={`note-mark ${note.marked ? 'note-mark-marked' : null}`}
                    onClick={() => this.handleMark(note.id)}
                  >
                    Mark
                  </button>

                  <Link className="note-edit" to={`/notes/${note.id}`}>Edit</Link>

                  <button
                    type="button"
                    className="note-delete"
                    onClick={() => this.handleDelete(note.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    );
  }
}

const mapStateToProps = (state) => ({
  notes: state,
});

const mapDispatchToProps = (dispatch) => ({
  markNoteProps: (id) => dispatch(markNote(id)),
  deleteNoteProps: (id) => dispatch(deleteNote(id)),
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(Notes);
