import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar'
import Table from './components/table'
function App() {
    return (
        <div class="container">
            <div class="row">
                <Sidebar />
                <Table />
            </div>
        </div>
    );
}

export default App;
