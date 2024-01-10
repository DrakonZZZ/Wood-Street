import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import ProvidersTree from './context/providerTree.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProvidersTree>
    <App />
  </ProvidersTree>
);
