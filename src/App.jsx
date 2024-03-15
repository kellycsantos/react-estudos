import { Routes, Route, NavLink } from "react-router-dom";
import useEf from "./component/UseEf";
import "./App.css";
import Pai from "./component/Pai";
import Reducer from "./component/usReducer";
import Polaroid from "./component/QuadroPolaroid";
import UsersView from "./component/Usuarios";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import Config from "./component/Configuracoes";
import Metricas from "./component/Metricas";
import AlterarFoto from "./component/AlterarFoto";
import Todo from "./component/Todo";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink className={({isActive}) => (isActive? 'active-link' : 'default-link')} to="/">Home</NavLink>
            <NavLink className={({isActive}) => (isActive? 'active-link' : 'default-link')} to="/useeffect">UseEffect</NavLink>
            <NavLink className={({isActive}) => (isActive? 'active-link' : 'default-link')} to="/usecontext">UseContext</NavLink>
            <NavLink className={({isActive}) => (isActive? 'active-link' : 'default-link')} to="/usereducer">UseReducer</NavLink>
            {/* <NavLink className={({isActive}) => (isActive? 'active-link' : 'default-link')} to="/children">Children</NavLink> */}
            <NavLink className={({isActive}) => (isActive? 'active-link' : 'default-link')} to="/users">Usuarios</NavLink>
            <NavLink className={({isActive}) => (isActive? 'active-link' : 'default-link')} to="/login">Login</NavLink>
            <NavLink className={({isActive}) => (isActive? 'active-link' : 'default-link')} to="/todo/5">Todo</NavLink>
          </nav>
        </header>
      </div>
      <main>
        {/* <Polaroid> <img alt="girafa" src="https://t1.ea.ltmcdn.com/pt/posts/2/3/7/lingua_da_girafa_cor_tamanho_e_curiosidades_24732_600.jpg" /></Polaroid> */}

          <Routes>
            <Route path="/users" Component={UsersView} />
            <Route path="/login" Component={Login} />
            <Route path="/dashboard" Component={Dashboard}>
              <Route path="/dashboard/config" Component={Config}/> 
              <Route path="/dashboard/metricas" Component={Metricas}/> 
              <Route path="/dashboard/alterarfoto" Component={AlterarFoto}/> 
            </Route>
            <Route path="/todo/:id" Component={Todo}/>
          </Routes>

      </main>
    </>
  );
}

export default App;
