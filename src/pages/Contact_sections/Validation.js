import React from "react";

function Validation({ className, children, isValid = false }) {
  return (
    <div className={[className, isValid ? " alert-validate" : ""]}>
      {children}
    </div>
  );
}

export default Validation;
