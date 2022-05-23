import React from "react";

function PageTitle(props) {
  return (
    <div>
      <h2 className="font-title text-2xl mt-3 ml-3">{props.title}</h2>
    </div>
  );
}

export default PageTitle;
