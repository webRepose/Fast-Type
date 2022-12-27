import { Routes, Route} from "react-router-dom";
// import { Suspense } from "react";
// import Home from '../main/home/Home';
// import Text from '../main/text/Text';
// import Code from '../main/code/Code';
// import Capcha from '../main/capcha/Capcha';
// import Symbols from '../main/symbols/Symbols';
// import Courses from '../main/courses/Courses';
// import NF404 from '../main/NF404/404';
// import Header from "../header/Header";
// import Type from "../main/text/type/type";
// import Preloader from "./Preloader";

import React, { Suspense, lazy } from 'react';

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
        <Suspense fallback = {<div>Загрузка</div>}>
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
        </Suspense>
        </>
    );
  }
  
  export default Links;