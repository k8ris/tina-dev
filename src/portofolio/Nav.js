import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <h5 className="text-center mt-4 mb-4">Tina Danilovic</h5>
      <nav>
      <ul className="nav justify-content-center">
        <li><Link to="/" className='layout-link'>Home</Link></li>
        <li><Link to="/paintings" className='layout-link'>Paintings</Link></li>
        <li><Link to="/work-on-paper" className='layout-link'>WorkOnPaper</Link></li>
        <li><Link to="/ceramics" className='layout-link'>Ceramics</Link> </li>
        <li><Link to="/bio" className='layout-link'>Bio</Link></li>
      <li><a href= "https://eae86d.myshopify.com/" target="_blank" className="layout-link">Shop</a></li>
      </ul>
      </nav>
      <Outlet />
    </div>
  )
};
export default Nav;
