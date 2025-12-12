import { Fragment } from "react";
import "./Child.css";

const Child = () => {
  return (
    <Fragment key="">
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga facilis officia est, sit veniam repellendus possimus beatae eos rerum nam ea aut soluta aperiam, praesentium voluptas at cumque hic corrupti.</p>
    </Fragment>
  );
};

export default Child;
