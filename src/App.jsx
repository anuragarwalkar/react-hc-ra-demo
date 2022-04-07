import ChartByType from "./ChartByType";
import ChartTypes from "./ChartTypes";
import { Fragment } from "react";

const App = () => {
  const Header = () => {
    return (
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <strong>Globant DV Team POC on Chart Types</strong>
      </div>
    );
  };

  return (
    <Fragment>
      <Header />
      <ChartTypes>
        <ChartByType />
      </ChartTypes>
    </Fragment>
  );
};

export default App;
