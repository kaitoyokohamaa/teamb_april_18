import "./App.css";
import { Sidebar } from "./component/layout/sidebar";
import { Chart } from "./component/chart";
import { Flex } from "@chakra-ui/react";
function App() {
  return (
    <Flex>
      <Sidebar />
      <Chart />
    </Flex>
  );
}

export default App;
