import "./AppHeader.css";
export default function AppHeader(): JSX.Element {
  return (
    <>
      <div className="MainTitle">
        <h1
          onClick={() =>
            window.open("https://zmdb-official.netlify.app/", "_self")
          }
        >
          ZMDb: Find Info About Your Favourite Show!
        </h1>
      </div>
    </>
  );
}
