import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, useLocation } from "react-router-dom";
import { Header } from './components/header';
import { Footer } from "./components/footer";

import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";
import { Category } from "./pages/category";
import { Recipe } from "./pages/recipe";

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h1>Oops!</h1>
      <h3>Sorry, an unexpected error has occurred.</h3>
      <h5>Does not exist: {location.pathname}</h5>
    </div>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <main className="container content">
          <Routes>
            <Route path="*" element={<NoMatch></NoMatch>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="contact/" element={<Contact></Contact>}></Route>
            <Route path="about/" element={<About></About>}></Route>
            <Route path="category/:name" element={<Category></Category>}></Route>
            <Route path="meal/:id" element={<Recipe></Recipe>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
