import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="navbar">
      <Link to={'/'}>
        <div className='logo'>stockRouter.js</div>
      </Link>
      <Link to={'/stocks'}>
        <div className='nav-link'>Dashboard</div>
      </Link>
      <Link to={'/about'}>
        <div className='nav-link'>About</div>
      </Link>
    </div>
  );
}
