// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../Component/Navbar';
import Announcement from '../Component/Announcment';
import Slider from '../Component/Slider';
function Home() {
    return (
        <div>
            <Announcement/>
            <Navbar />
            <Slider/>
        </div>

        // <BrowserRouter>
        // <Routes>
        //     <Route>

        //     </Route>
        // </Routes>
        // </BrowserRouter>
    )

}

export default Home;
