import React from "react";
import './styles.css'
import typeAlertEnumArray from "../../utils/typeAlertEnum"
function Alert({ type, message, isShow=false, handleClose }) {
  if (!typeAlertEnumArray.includes(type)) {
    type = ""
  }
  return (
    <div className={!isShow ? 'hide' : `${type} alert`} onClick={handleClose} >
      {message}
      <span className='closebtn'>
        &times;
      </span>
    </div>
  );
}
export default Alert
