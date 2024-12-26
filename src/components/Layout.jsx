import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
       <nav>
        <ul className="flex bg-black text-white gap-5">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="About">About</Link>
            </li>
            <li>
                <Link to="contact">Contact</Link>
            </li>
        </ul>
       </nav>
       <Outlet />
    </div>
  );
}
