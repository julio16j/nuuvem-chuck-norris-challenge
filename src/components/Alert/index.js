import React from "react";
import './styles.css'
function Alert({ children, type, message, isShow=false, handleClose }) {

  function renderElAlert () {
    return React.cloneElement(children);
  };

  return (
    <div className={!isShow ? 'hide' : `${type} alert`} onClick={handleClose} >
      {children ? renderElAlert() : message}
      <span className='closebtn'>
        &times;
      </span>
    </div>
  );
}
export default Alert
