import '../common/lib';
import App from '../component/App';
import CreateCandidate from '../component/candidate/CreateCandidate';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="candidate/create" component={CreateCandidate}/>
      
    </Route>
  </Router>, 
	document.getElementById('react-content'));
