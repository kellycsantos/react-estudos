import { Outlet, NavLink } from "react-router-dom";
export default function Dashboard() {
  return (
    <>
      <h1>Bem vindo ao sistema</h1>
      <div>
        <NavLink to="/dashboard/config"> Configuração </NavLink>
        <NavLink to="/dashboard/metricas"> Metricas </NavLink>
        <NavLink to="/dashboard/alterarfoto"> Foto de perfil </NavLink>
        <Outlet />
      </div>
    </>
  );
}
