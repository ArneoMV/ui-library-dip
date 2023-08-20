import ReactDOM from 'react-dom'
import App from './App'

import { AlertProvider } from './components/Organism/Alert/alert.context';

// ReactDOM.render(<App />, document.querySelector("#root"))

ReactDOM.createRoot(document.getElementById("root")).render(
    <AlertProvider>
        <App />
    </AlertProvider>
);