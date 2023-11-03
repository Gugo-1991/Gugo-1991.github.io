import { Fragment } from "react";
import "./style.css";
import Column from "./columnCreator";

function Columns() {
  const statuses = ["To-do", "In process ", "Done"];
  return (
    <Fragment>
      <section className="columnsArea" key={Math.random()}>
        <div className="columnsPosition" key={Math.random()}>
          {statuses.map((e) => {
            return <Column status={e} />;
          })}
        </div>
      </section>
    </Fragment>
  );
}

export default Columns;
