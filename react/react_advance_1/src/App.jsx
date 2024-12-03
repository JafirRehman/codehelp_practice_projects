import Randomgif from "./components/Randomgif";
import Specialgif from "./components/Specialgif";

const App = () => {
  return (
    <div className="bg-blue-500 flex min-h-screen justify-around pt-5">
      <Randomgif />
      <Specialgif />
    </div>
  );
};

export default App;
