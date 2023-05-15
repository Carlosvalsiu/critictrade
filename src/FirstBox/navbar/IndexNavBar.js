import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineComment, AiFillFileText } from 'react-icons/ai';
import { HiUserGroup } from 'react-icons/hi';
import '../../Styles/dinamic.css';

const DynamicLink = ({ to, icon, text, onClick, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleLinkClick = () => {
    onClick();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      to={to}
      className={`dynamic-link ${isActive ? 'active' : ''}`}
      onClick={handleLinkClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isActive && isHovered && <div className="cube" />}
      {icon}
      {text}
    </Link>
  );
};

export const IndexNavBar = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (linkId) => {
    setSelectedLink(linkId);
  };

  return (
    <div className='lastbox'>
      <div className="dynamic-container">
        <DynamicLink 
          to="/"
          icon={<AiFillHome />}
          text=" &nbsp;&nbsp;Home"
          onClick={() => handleLinkClick(1)}
          isActive={selectedLink === 1}
        />
        <DynamicLink
          to="/Groups"
          icon={<AiOutlineComment />}
          text=" &nbsp;&nbsp;Groups"
          onClick={() => handleLinkClick(2)}
          isActive={selectedLink === 2}
        />
        <DynamicLink
          to="/Comunity"
          icon={<HiUserGroup />}
          text=" &nbsp;&nbsp;Comunity"
          onClick={() => handleLinkClick(3)}
          isActive={selectedLink === 3}
        />
        <DynamicLink
          to="/Criticas"
          icon={<AiFillFileText />}
          text=" &nbsp;&nbsp;Criticas"
          onClick={() => handleLinkClick(4)}
          isActive={selectedLink === 4}
        />
      </div>
    </div>
  );
};


















// export const IndexNavBar = () => {
//     return (
//       <div className="StyleNavBar">
//         <div className="pags">
//           <div>
//           <Link className='Home' to='/'><AiFillHome/>  Home</Link>
//           </div>
//           <div>
//           <Link className='grupos' to='/Groups'><AiOutlineComment/>   Groups</Link>
//           </div>
//           <div>
//           <Link className='Comunity' to='/Comunity'><HiUserGroup/>   Comunity</Link>
//           </div>
//           <div>
//           <Link className='Criticas' to='/Criticas'><AiFillFileText/>   Criticas</Link>
//           </div>
//         </div>
//       </div>
//       );
//     };