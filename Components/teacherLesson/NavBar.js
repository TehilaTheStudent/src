import {  Link } from 'react-router-dom'

const NavBar = () => {
    return ( 
        <nav>
        <ul>
          <li><Link to="home">עמוד הבית</Link></li>
          <li><Link to="about">עמוד אודות</Link></li>
          <li><Link to="list">רשימה </Link></li>
          <li><Link to="details">פרטים  </Link></li>
          <li><Link to="loginnnn">התחברות </Link></li>

        </ul>
      </nav>
     );
}
 
export default NavBar;