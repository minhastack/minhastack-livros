
import {HashRouter ,Routes, Route, BrowserRouter} from 'react-router-dom';
import HomePage from '../pages/homepage';
import BooksPage from '../pages/booksPage';

const MainRoutes = ()=>{
  
    return (
       <BrowserRouter>
            <Routes>
                <Route  path='/' element={<HomePage/>}/>
                <Route path="/books" element={<BooksPage/>}/>
            </Routes>
        </BrowserRouter>
        )
} 

export default MainRoutes;