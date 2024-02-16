import { Routes, Route } from "react-router-dom"

import Layout from "./pages/Layout"
import Home from "./pages/Home"
import ServicePage from "./pages/ServicePage"
import NotFound from "./pages/NotFound"
import ContentPage from "./pages/ContentPage"
import IdeasPage from "./pages/IdeasPage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Provide from "./pages/Provide"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services">
          <Route path="content" element={<ContentPage />} />
          <Route path="ideas" element={<IdeasPage />} />
          <Route path=":serviceId?" element={<ServicePage />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="provide">
          <Route path=":serviceId?" element={<Provide />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
export default App
