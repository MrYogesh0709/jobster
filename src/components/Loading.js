import React from "react";

const Loading = ({ loading }) => {
  return (
    <div>
      <div
        className={`${loading ? "loading loading-center " : "loading "}  `}
      ></div>
    </div>
  );
};

export default Loading;
