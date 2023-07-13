import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Readme from "./pages/Readme";
import Rascunho from "./pages/Rascunho";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>Home</Route>
                <Route path='/posts' element={<Posts />}>Posts</Route>
                <Route path="/readme" element={<Readme />}>Readme</Route>
                <Route path="/rascunho" element={<Rascunho />}>Readme</Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;