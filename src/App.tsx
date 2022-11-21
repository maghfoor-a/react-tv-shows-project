import { greet } from "./utils/greet";
import episodes from './episodes.json'

function App(): JSX.Element {
  return <h1>{greet("World")}</h1>;
}

export default App;
