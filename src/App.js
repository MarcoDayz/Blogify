import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout.js";
import Home from "./pages/Home.js";

const App = () => {

    //create http request for posts
    //pass the data down to home component

    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}

export default App;