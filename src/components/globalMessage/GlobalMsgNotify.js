import React from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import './GlobalMsgNotify.css';

const GlobalMsgNotify = ({msg, alertType}) => {
  return (
    <>
      <div className={"global-notify-msg-container " + alertType}>
        <span className="text-container">
          {msg}
        </span>
        <FontAwesomeIcon className="close-icon" icon={faX} />
      </div>
    </>
  );
}

GlobalMsgNotify.propTypes = {
  msg: PropTypes.string.isRequired,
};

GlobalMsgNotify.defaultProps = {
  alertType: "danger" 
};

export default GlobalMsgNotify