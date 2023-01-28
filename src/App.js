import Navbar from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import BookAppointment from "./components/BookAppointment";
import ViewAppoinment from "./components/ViewAppoinment";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="//viewappointment" element={<ViewAppoinment />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
