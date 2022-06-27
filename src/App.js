import Divider from "./components/Divider";
import Counter from "./components/Counter";
import ApiFetcher from "./components/ApiFetcher";

export default function App() {

  return (
    <>
      <h3 className="title">React Portifolio</h3>
      <Divider/>
      <Counter/>
      <Divider/>
      <ApiFetcher/>
      <Divider/>
    </>
  );
}
