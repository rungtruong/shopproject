import React from "react";

const Footer = props => {
  return (
    <div className='bg-dark'>
      <p className='text-info'>Make by {props.name}</p>
    </div>
  );
};

export default Footer;
