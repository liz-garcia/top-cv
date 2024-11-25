import AppRouter from "./AppRouter.jsx";
import Nav from "./components/Nav.jsx";

// * App.jsx builds all our main layout elements:
// * Nav, Main, Footer, Pages content (AppRouter), etc.
// * AppRouter.jsx to load the content for each page.
const App = () => {
  return (
    <>
      <Nav />
      <main className="w-full pb-10">
        <AppRouter />
      </main>
    </>
  );
};

export default App;
