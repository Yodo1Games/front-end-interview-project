import { useRoutes } from "react-router-dom";
import routes from "src/routes/index";

function App(): JSX.Element {
  const routing = useRoutes(routes);

  return <div style={{ padding: "24px" }}>{routing}</div>;
}

export default App;
