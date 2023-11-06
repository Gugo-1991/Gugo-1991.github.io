import { Fragment } from "react";
import "./style.css";
import Column from "./columnCreator";
import "react-dropdown/style.css";

function Columns() {
  const statuses = ["To-do", "In process ", "Done"];
  return (
    <Fragment>
      <section className="columnsArea" key={Math.random()}>
        <div className="columnsPosition" key={Math.random()}>
          {statuses.map((e) => {
            return <Column key={Math.random()} status={e} />;
          })}
        </div>
        ;
      </section>
    </Fragment>
  );
}

export default Columns;
