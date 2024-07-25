import { useDispatch } from "react-redux";
import authService from "../../appwriteServices/Auth";
import { logout } from "../../reducers/AuthSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await authService.logout().then(() => {
        dispatch(logout());
      });
    } catch (e) {
      console.log("error occurred in logout", e);
    }
  };
  return (
    <button
      className=" inline-block px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue active:bg-red-600 hover:bg-red-700"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
