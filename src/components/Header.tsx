// import React from "react";
// import { Link } from "react-scroll";

// const Header: React.FC = () => {
//   return (
//     <header className="header">
//       <nav>
//         <Link to="home" smooth duration={500}>
//           Ana Sayfa
//         </Link>
//         <space> </space>
//         <Link to="about" smooth duration={500}>
//           Hakkında
//         </Link>
//         <space> </space>
//         <Link to="projects" smooth duration={500}>
//           Projeler
//         </Link>
//         <space> </space>
//         <Link to="contact" smooth duration={500}>
//           İletişim
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import { Link } from "react-scroll";
import "../Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="home" smooth duration={500}>
          Ana Sayfa
        </Link>
        <Link to="about" smooth duration={500}>
          Hakkında
        </Link>
        <Link to="projects" smooth duration={500}>
          Projeler
        </Link>
        <Link to="contact" smooth duration={500}>
          İletişim
        </Link>
      </nav>
    </header>
  );
};

export default Header;
