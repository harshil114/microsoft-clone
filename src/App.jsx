import Card from "./components/Card";
import List from "./components/List";
import ListContainer from "./components/ListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Card />
      <List/>
      <ListContainer/>
    </div>
  );
}
export default App;
