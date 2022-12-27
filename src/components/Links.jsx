import { Routes, Route} from "react-router-dom";
import React, { lazy } from 'react';
const Home = lazy(() => import('../main/home/Home'));
const Text = lazy(() => import('../main/text/Text'));
const Code = lazy(() => import('../main/code/Code'));
const Capcha = lazy(() => import('../main/capcha/Capcha'));
const Symbols = lazy(() => import('../main/symbols/Symbols'));
const Courses = lazy(() => import('../main/courses/Courses'));
const NF404 = lazy(() => import('../main/NF404/404'));
const Header = lazy(() => import('../header/Header'));
const Type = lazy(() => import('../main/text/type/type'));

function Links() {
    return (
        <>
        <Routes>
        <Route path="/" element={<Header/>}>
        <Route index element={<Home/>}></Route>
        <Route path='text' element={<Text/>}></Route>
        <Route path='text/type' element={<Type/>}></Route>
        <Route path="code" element={<Code/>}></Route>
        <Route path="symbols" element={<Symbols/>}></Route>
        <Route path="capcha" element={<Capcha/>}></Route>
        <Route path="courses" element={<Courses/>}></Route>
        <Route path="*" element={<NF404/>}></Route>
        </Route>
      </Routes>
        </>
    );
  }
  
  export default Links;