import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import noteReducer from './redux/reducers/noteReducer';
import Note from './components/Note/Note';
import NoteList from './components/NoteList/NoteList';
import NoteForm from './components/NoteForm/NoteForm';
import './App.scss';

const store = createStore(noteReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <div className="app">
          <header className="header">Notes</header>
          <Router>
            <Switch>
              <Route path="/note/:noteId">
                <Note />
              </Route>
              <Route path="/">
                <NoteForm />
                <NoteList />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </Provider>
  );
}

export default App;
