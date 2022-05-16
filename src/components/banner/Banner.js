import React from 'react';
import PropTypes from "prop-types";
import './Banner.css';

const Banner = ({title, subTitle, imgUrl}) => {
  return (
    <>
      <div className="banner">
        <div className="left-side">
          <div className="titles-container">
            {subTitle && <h2 className="subtitle">{subTitle}</h2>}
            <h1 className="title">{title}</h1>
          </div>
        </div>
        <div className="curve"></div>
        <div className="right-side">
          {imgUrl !== "" && 
            <div className="banner-img">
              <img src={imgUrl} alt="Banner img" />
            </div>
          }
        </div>
      </div>
    </>
  );

}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
};

Banner.defaultProps = {
  imgUrl: "",
  subTitle: ""
}

export default Banner