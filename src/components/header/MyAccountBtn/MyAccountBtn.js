import React from 'react';
import './MyAccountBtn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const MyAccountBtn = () => {
  return (
    <>
      <div className="my-acount">
        <a href="/my-account" className="my-acount-btn">
          <FontAwesomeIcon className="user-icon" icon={faUser} />
          <span className="simpleText">Mi Cuenta</span>
        </a>
      </div>
    </>
  );
}

export default MyAccountBtn