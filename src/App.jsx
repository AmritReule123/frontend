// import of router
import {BrowserRouter,Routes,Route} from "react-router-dom"


//component vanaya ko type of function jasle ni JSX garxa html jasta syntax
function App() {


  return (
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<h1>Hello, World!</h1>} />
    <Route path="/about" element={<h1>About Us</h1>} />
    <Route path="/contact" element={<h3> this is a contact page</h3>} />
    <Route path="/services" element={<h2> this is our services tag</h2>} />
  </Routes>
</BrowserRouter> 





  )
}

export default App
