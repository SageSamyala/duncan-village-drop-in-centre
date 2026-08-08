import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClientInstance } from "@/lib/query-client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import PageNotFound from "./lib/PageNotFound"
import ScrollToTop from "./components/ScrollToTop"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Programmes from "@/pages/Programmes"
import HowWeWork from "@/pages/HowWeWork"
import Impact from "@/pages/Impact"
import GetInvolved from "@/pages/GetInvolved"
import Team from "@/pages/Team"
import Contact from "@/pages/Contact"

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
