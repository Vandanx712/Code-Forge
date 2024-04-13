import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Uprofile from './Uprofile';
import Default from './Default';
import Courses from './Courses';
import Course1 from './Course1';
import Course2 from './Course2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Layout/>}>
                <Route path='' element={<App/>}/>
                <Route path='courses' element={<Courses/>}/>
                <Route path='detail1' element={<Course1/>}/>
                <Route path='detail2' element={<Course2/>}/>
                {/* <Route path='learninghub' element={<Learninghub/>}/>
                <Route path='liveclasses' element={<Liveclasses/>}/> */}
                <Route path='contact' element={<Contact/>}/>
            </Route>
            <Route path='/dash' element={<Dashboard/>}>
                <Route path='profile' element={<Uprofile/>}/>
                <Route index element={<Default/>}/> /* index is used for default show element */ 
            </Route>
        </Routes>
    </BrowserRouter>
);
reportWebVitals();
