import { Routes, Route} from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import Preloader from "./Preloader/Preloader";
const Home = lazy(() => import('../main/home/Home')),
History = lazy(() => import('../main/home/History/History')),
Guids = lazy(() => import('../main/home/Guids/Guids')),
HistoryID = lazy(() => import('../main/home/History/HistoryID/HistoryID')),
Tips = lazy(() => import('../main/home/Tips/Tips')),
Text = lazy(() => import('../main/text/Text')),
Code = lazy(() => import('../main/code/Code')),
Capcha = lazy(() => import('../main/capcha/Capcha')),
Symbols = lazy(() => import('../main/symbols/Symbols')),
NF404 = lazy(() => import('../main/NF404/404')),
Header = lazy(() => import('../header/Header')),
Type = lazy(() => import('../main/text/Typing/Typing')),
ResultShare = lazy(()=> import('../main/text/Typing/ResultShare/ResultShare'));


const Links = () => {
    return (
        <>
        <Routes>
        <Route path="/" element={<Suspense fallback={<Preloader/>}><Header/></Suspense>}>
        <Route index element={<Suspense fallback={<Preloader/>}><Home/></Suspense>}></Route>
        <Route path='history' element={<Suspense fallback={<Preloader/>}><History/></Suspense>}></Route>
        <Route path='answers' element={<Suspense fallback={<Preloader/>}><Guids/></Suspense>}></Route>
        <Route path='tips' element={<Suspense fallback={<Preloader/>}><Tips/></Suspense>}></Route>
        <Route path='history/:id' element={<Suspense fallback={<Preloader/>}><HistoryID/></Suspense>}></Route>
        <Route path='text' element={<Suspense fallback={<Preloader/>}><Text/></Suspense>}></Route>
        <Route path='text/type' element={<Suspense fallback={<Preloader/>}><Type/></Suspense>}></Route>
        <Route path="code" element={<Suspense fallback={<Preloader/>}><Code/></Suspense>}></Route>
        <Route path="symbols" element={<Suspense fallback={<Preloader/>}><Symbols/></Suspense>}></Route>
        <Route path="capcha" element={<Suspense fallback={<Preloader/>}><Capcha/></Suspense>}></Route>
        <Route path="*" element={<Suspense fallback={<Preloader/>}><NF404/></Suspense>}></Route>
        <Route path="result" element={<Suspense fallback={<Preloader/>}><ResultShare/></Suspense>}></Route>
        </Route>
      </Routes>
        </>
    );
  }
  
  export default Links;