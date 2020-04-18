import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import noteReducer from './redux/reducers/noteReducer';
import Notes from './components/Notes/Notes';
import NoteForm from './components/NoteForm/NoteForm';
import NoteEdit from './components/NoteEdit/NoteEdit';
import './App.scss';

const store = createStore(noteReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <div className="app">
          <Router>

            <Link className="header" to="/">
              <header>Notes</header>
            </Link>
            <Switch>
              <Route path="/notes/:id">
                <NoteEdit />
              </Route>
              <Route path="/">
                <NoteForm />
                <Notes />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </Provider>
  );
}

export default App;
