import './App.css'
import { Routes, Route } from "react-router";
import Tambah from './pages/tambah';
import Home from './pages/Home';
import Kurang from './pages/Kurang';
import Bagi from './pages/Bagi';
import Kali from './pages/Kali';
function App() {
    return (
        <>
            <div class="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:tambah" element={<Tambah />} />
                    <Route path="/kurang" element={<Kurang />} />
                    <Route path="/bagi" element={<Bagi />} />
                    <Route path="/kali" element={<Kali />} />
                </Routes>
            </div>
        </>);
}

export default App
