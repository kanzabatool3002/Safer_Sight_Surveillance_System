import { Link } from 'react-router-dom';
import './sidebar.css';
import { useAuthStore } from "./store/authStore";
import { formatDate } from "./utils/date";

function Sidebar() {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  const menuItems = ['Watching', 'Alerts', 'Video-Wall', 'FAQ','video-detection'];

  return (
    <div className="sidebar">
      <div className="logo">
	  
	  <img src="logo.png" alt="SAFER SIGHT" />
       
      </div>
      <nav>
        {menuItems.map((item, index) => (
          <Link key={index} to={`/${item.toLowerCase()}`}>  
            {item}
          </Link>
        ))}
      </nav>
      <div className='space-y-1'>
        <div className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'>
          <h3 className='text-lg font-semibold text-blue-400 mb-3'>Profile Information</h3>
          <p className='text-gray-300'>Name: {user.name}</p>
          
        </div>
        <div className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'>
          <h3 className='text-lg font-semibold text-blue-400 mb-3'>Account Activity</h3>
          <p className='text-gray-300'>
            <span className='font-bold'>Joined: </span>
            {new Date(user.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className='text-gray-300'>
            <span className='font-bold'>Last Login: </span>
            {formatDate(user.lastLogin)}
          </p>
        </div>
      </div>

      <div className='mt-4'>
      <button
  onClick={handleLogout}
  className='w-full py-3 px-4 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-white hover:border-2 hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
>
  Logout
</button>

      </div>
    </div>
  );
}

export default Sidebar;
