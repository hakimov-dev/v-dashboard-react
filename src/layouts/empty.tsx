import React from "react";

const empty: React.FC = (props, children) => {
  return (
    <div>
      { children }
    </div>
  );
};

export default empty;