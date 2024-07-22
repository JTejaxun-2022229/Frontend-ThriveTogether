import { useUserDetails } from "../../shared/hooks/useUserDetails";

export const RoleBasedLinks = () => {

  const {role, logout} = useUserDetails();

    const renderLinks = () => {
      switch (role) {
        case "ADMIN_ROLE":
          return (
            <>
              <a href="#">Admin Dashboard</a>
              <a href="#">Admin Settings</a>
              <div className="logout-container">
                <input onClick={logout} type="button" value="Logout" />
              </div>
            </>
          );
        case "USER_ROLE":
          return (
            <>
              <a href="/dashboard/appointment">User Profile</a>
              <a href="#">User xd</a>
              <a href="#">User Settings</a>
              <div className="logout-container">
                <input onClick={logout} type="button" value="Logout" />
              </div>
            </>
          );
        case "SUPPORTER_ROLE":
          return (
            <>
              <a href="#">Client List</a>
              <a href="#">Psychologist Settings</a>
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