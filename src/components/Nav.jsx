import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="navbar">
      <Link to={'/'}>
        <div>HOME</div>
      </Link>
      <Link to={'/about'}>
        <div>ABOUT</div>
      </Link>
    </div>
  );
}
