import { Routes, Route} from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import Preloader from "./Preloader/Preloader";
const Home = lazy(() => import('../main/home/Home'));
const Text = lazy(() => import('../main/text/Text'));
const Code = lazy(() => import('../main/code/Code'));
const Capcha = lazy(() => import('../main/capcha/Capcha'));
const Symbols = lazy(() => import('../main/symbols/Symbols'));
const Courses = lazy(() => import('../main/courses/Courses'));
const NF404 = lazy(() => import('../main/NF404/404'));
const Header = lazy(() => import('../header/Header'));
const Type = lazy(() => import('../main/text/type/type'));
const ResultShare = lazy(()=> import('../main/text/type/ResultShare/ResultShare'))


function Links() {
    return (
        <>
        <Routes>
        <Route path="/" element={<Suspense fallback={<Preloader/>}><Header/></Suspense>}>
        <Route index element={<Suspense fallback={<Preloader/>}><Home/></Suspense>}></Route>
        <Route path='text' element={<Suspense fallback={<Preloader/>}><Text/></Suspense>}></Route>
        <Route path='text/type' element={<Suspense fallback={<Preloader/>}><Type/></Suspense>}></Route>
        <Route path="code" element={<Suspense fallback={<Preloader/>}><Code/></Suspense>}></Route>
        <Route path="symbols" element={<Suspense fallback={<Preloader/>}><Symbols/></Suspense>}></Route>
        <Route path="capcha" element={<Suspense fallback={<Preloader/>}><Capcha/></Suspense>}></Route>
        <Route path="courses" element={<Suspense fallback={<Preloader/>}><Courses/></Suspense>}></Route>
        <Route path="*" element={<Suspense fallback={<Preloader/>}><NF404/></Suspense>}></Route>
        <Route path="result" element={<Suspense fallback={<Preloader/>}><ResultShare/></Suspense>}></Route>
        </Route>
      </Routes>
        </>
    );
  }
  
  export default Links;