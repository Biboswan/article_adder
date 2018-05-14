import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter ,Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostIndex from './components/postindex.js';
import PostNew from './components/post_new.js';
import Post_Show from './components/post_show.js';
import regsw from './registerws.js';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore); //promise middleware between action creator and reducer

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    		<Switch>
    			<Route path="/posts/new" component={ PostNew } />
    			<Route path="/posts/:id" component={ Post_Show } />
    			<Route path="/" component={ PostIndex } />
			</Switch>
    	</div>
    </BrowserRouter>
  </Provider>
	, document.querySelector('.container'));
	regsw();
