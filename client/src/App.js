import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./Pages/List";
import Form from "./Pages/ContactForm";
import Header from "./Componets/Common/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/all" element={<List />} />
          <Route path="/" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
