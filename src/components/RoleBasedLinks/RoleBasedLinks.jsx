import { useUserDetails } from "../../shared/hooks/useUserDetails";

export const RoleBasedLinks = () => {

  const { role, logout } = useUserDetails();

  const renderLinks = () => {
    switch (role) {
      case "ADMIN_ROLE":
        return (
          <>
            <a href="/profile">Perfil</a>
            <a href="/users">Usuarios</a>
            <a href="/notes">Notas</a>
            <div className="logout-container">
              <input onClick={logout} type="button" value="Logout" />
            </div>
          </>
        );
      case "USER_ROLE":
        return (
          <>
            <a href="/profile">Perfil</a>
            <a href="/post">Publicaciones</a>
            <a href="/supporters">Ayuda Profesional</a>
            <div className="logout-container">
              <input onClick={logout} type="button" value="Logout" />
            </div>
          </>
        );
      case "SUPPORTER_ROLE":
        return (
          <>
            <a href="/profile">Perfil</a>
            <a href="/patients">Pacientes</a>
            <a href="/gestNote">Notas</a>
            <div className="logout-container">
              <input onClick={logout} type="button" value="Logout" />
            </div>
          </>
        );
      default:
        return <a href="/404">404 Not Found</a>;
    }
  };

  return <div className="dropdown-content">{renderLinks()}</div>;
};