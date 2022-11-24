import AppHeader from "./components/AppHeader";
import EpisodesView from "./components/AllEpisodesView";
import AllShowsView from "./components/AllShowsView";
import { useState } from "react";

function App(): JSX.Element {

  const [isHome, setIsHome] = useState<boolean>(true);
  return (
    <>
      <AppHeader />
      {isHome ? <AllShowsView/> : <EpisodesView />}
    </>
  );
}

export default App;
