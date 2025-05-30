import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import ScrollTop from "./component/ScrollTop";

function App() {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
