'use strict';

// import all listener files so they can attach to the DOM
import './listeners/inputting.js';
import './listeners/change-separator.js';

// does your project have code that executes when the document or window are ready?
// that code can go here

// import all listener files so they can attach to the DOM

// import './listeners/voiceChanged.js';
// import './listeners/change.js';
// import './listeners/changeOption.js';
// import './listeners/speak.js';
// import './listeners/stop.js'


import { data } from './data.js';

document.getElementById('separator-input').value = data.separator;
