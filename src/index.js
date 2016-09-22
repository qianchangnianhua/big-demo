import React from 'react';
import {render} from 'react-dom';

import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import MyRoutes from './routers.js';
import 'highlight.js/styles/github.css';
import './post.css';


// import Test from './Test.js';



render(<MyRoutes />,document.getElementById('root'));
// render(<Test />,document.getElementById('root'));
