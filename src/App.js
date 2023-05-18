import MainText from "./components/practice/Practice";
import { SecondText } from "./components/practice2/Practice2";
import CustomButton from "./components/customButton/CustomButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MainText />
      <SecondText />
      <CustomButton name="Save" type="primary" />
      <CustomButton name="Delete" type="warning" />
    </div>
  );
}

export default App;
