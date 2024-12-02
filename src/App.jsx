import './App.css';
import {ChessList} from './ChessList';
import {ChessSingle} from './ChessSingle';
import {ChessCreate} from './ChessCreate';
import {ChessMod} from './ChessMod';
import {ChessDel} from './ChessDel';
import {BrowserRouter as Router, NavLink, Routes, Route} from 'react-router-dom';


export const App = () => {
  return (
    <Router>
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink className="nav-link" to="/">Sakkozó</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className="nav-link" to="/ChessCreate">Új sakkozó</NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<ChessList/>}/>
      <Route path="/chess/:chessId" element={<ChessSingle/>}/>
      <Route path="/ChessCreate" element={<ChessCreate/>}/>
      <Route path="/del-chess/:chessId" element={<ChessDel/>}/>
      <Route path="/mod-chess/:chessId" element={<ChessMod/>}/>
    </Routes>
    </Router>
  );
}
