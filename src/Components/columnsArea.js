import { Fragment } from "react";
import "./style.css";
import Column from "./columnCreator";
import "react-dropdown/style.css";
import { useSelector } from "react-redux";
import { selectContent } from "../features/slice";

function Columns() {
  const value = useSelector(selectContent);
  let Backlog = 0;
  let Inprocess = 0;
  let Done = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i].status === "Backlog") {
      Backlog += 1;
    } else if (value[i].status === "In process") {
      Inprocess++;
    } else if (value[i].status === "Done") {
      Done++;
    }
  }
  const statuses = [
    {
      name: "Backlog",
      count: Backlog,
    },
    {
      name: "In process",
      count: Inprocess,
    },
    {
      name: "Done",
      count: Done,
    },
  ];

  return (
    <Fragment>
      <section className="columnsArea" key={Math.random()}>
        <div className="columnsPosition" key={Math.random()}>
          {statuses.map((e) => {
            return <Column key={Math.random()} items={e} />;
          })}
        </div>
        ;
      </section>
    </Fragment>
  );
}

export default Columns;
