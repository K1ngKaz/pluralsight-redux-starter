'use strict';
import React from 'react';
import { Router, History} from 'react-router';
import routes from './src/routes.js';


Router.run(routes, History, function(Handler){
	React.render(<Handler/>, document.getElementById('app'));
});
