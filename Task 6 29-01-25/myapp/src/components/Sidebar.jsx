 import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
      <aside className="w-65 bg-gray-900 text-white  p-4">
        <ul>
          <li className="mb-2"><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li className="mb-2"><Link to="/blog" className="hover:text-blue-400">Blog</Link></li>
          <li className="mb-2"><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li className="mb-2"><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </aside>
    );
  };
  
  export default Sidebar;
  