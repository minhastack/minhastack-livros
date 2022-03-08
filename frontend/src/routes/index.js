
import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/homepage/';
import BooksPage from '../pages/booksPage';

const MainRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/books" element={<BooksPage/>}/>

        </Routes>

        )
} 

export default MainRoutes;