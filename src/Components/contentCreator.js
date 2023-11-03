import { Fragment } from "react";

function Content() {
  return (
    <Fragment>
      <div className="content" key={Math.random()}>
        <div className="" key={Math.random()}>
          title
        </div>
        <div className="" key={Math.random()}>
          status
        </div>
        <div className="" key={Math.random()}>
          description
        </div>
      </div>
    </Fragment>
  );
}

export default Content;
