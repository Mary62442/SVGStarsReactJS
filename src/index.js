import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProficiencyScale from './proficiencyscale';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ProficiencyScale numberOfStars = {5} />, document.getElementById('root'));
registerServiceWorker();
