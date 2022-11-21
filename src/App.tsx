import AppHeader from "./components/AppHeader";
import EpisodesView from "./components/AllEpisodesView";
import Footer from "./components/AppFooter";
function App(): JSX.Element {
  return (
    <>
      <AppHeader />
      <EpisodesView />
      <hr/>
      <Footer />
    </>
  );
}

export default App;
