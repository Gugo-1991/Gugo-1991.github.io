import { Fragment } from "react";
import "./header.css";
import Button from "../Components/buttonCreator";
import Input from "../Components/inputCreator";
function Header() {
  return (
    <Fragment>
      <section className="header">
        <Button name={"+"} />
        <Input title={"Title ..."} />
        <Input title={"Description ..."} />
      </section>
    </Fragment>
  );
}

export default Header;
