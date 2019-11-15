import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './css/styles.css';

import { Provider } from "mobx-react"; // need to pass back state that we removed and placed in mobx

import GalleryStore from "./stores/GalleryStore"; // acces store in App need to pass it

const galleryStore = new GalleryStore();

ReactDOM.render(
    // gives acces to store
    <Provider galleryStore={galleryStore}>
        <App />
    </Provider>,
document.getElementById('root'));
registerServiceWorker();