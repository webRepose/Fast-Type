import { Routes, Route } from "react-router-dom";
import React, { lazy, memo, Suspense } from 'react';
import Preloader from "./Preloader";
import ErrorBoundary from "./ErrorBoundary";
const Home = lazy(() => import('../main/home/Home')),
  History = lazy(() => import('../main/home/History/History')),
  Stats = lazy(() => import('../main/home/Stats/Stats')),
  Course = lazy(() => import('../main/home/Course/Course')),
  Workon = lazy(() => import('../main/home/Workon/Workon')),
  Guids = lazy(() => import('../main/home/Guids/Guids')),
  User = lazy(() => import('../main/home/User/User')),
  HistoryID = lazy(() => import('../main/home/History/HistoryID/HistoryID')),
  Tips = lazy(() => import('../main/home/Tips/Tips')),
  Text = lazy(() => import('../main/text/Text')),
  Code = lazy(() => import('../main/code/Code')),
  TypingCode = lazy(() => import('../main/code/TypingCode/TypingCode')),
  Capcha = lazy(() => import('../main/capcha/Capcha')),
  TypingCapcha = lazy(() => import('../main/capcha/TypingCapcha/TypingCapcha')),
  Symbols = lazy(() => import('../main/symbols/Symbols')),
  TypingSymbols = lazy(() => import('../main/symbols/TypingSymbols/TypingSymbols')),
  NF404 = lazy(() => import('../main/NF404/404')),
  Header = lazy(() => import('../header/Header')),
  Type = lazy(() => import('../main/text/Typing/TypingText')),
  ResultShare = lazy(() => import('../components/TypingBlock/ResultShare/ResultShare')),
  TEST = lazy(() => import('../components/TEST')),
  CheckSelf = lazy(() => import('../main/home/CheckSelf/CheckSelf'));


const Links = memo(() => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Suspense fallback={<Preloader />}><Header /></Suspense>}>
          <Route index element={<Suspense fallback={<Preloader />}><ErrorBoundary><Home /></ErrorBoundary></Suspense>}></Route>
          <Route path='history' element={<Suspense fallback={<Preloader />}><ErrorBoundary><History /></ErrorBoundary></Suspense>}></Route>
          <Route path='stats' element={<Suspense fallback={<Preloader />}><ErrorBoundary><Stats /></ErrorBoundary></Suspense>}></Route>
          <Route path='user' element={<Suspense fallback={<Preloader />}><ErrorBoundary><User /></ErrorBoundary></Suspense>}></Route>
          <Route path='course' element={<Suspense fallback={<Preloader />}><ErrorBoundary><Course /></ErrorBoundary></Suspense>}></Route>
          <Route path='workon' element={<Suspense fallback={<Preloader />}><ErrorBoundary><Workon /></ErrorBoundary></Suspense>}></Route>
          <Route path='answers' element={<Suspense fallback={<Preloader />}><ErrorBoundary><Guids /></ErrorBoundary></Suspense>}></Route>
          <Route path='tips' element={<Suspense fallback={<Preloader />}><ErrorBoundary><Tips /></ErrorBoundary></Suspense>}></Route>
          <Route path='history/:id' element={<Suspense fallback={<Preloader />}><ErrorBoundary><HistoryID /></ErrorBoundary></Suspense>}></Route>
          <Route path='text' element={<Suspense fallback={<Preloader />}><ErrorBoundary><Text /></ErrorBoundary></Suspense>}></Route>
          <Route path='text/typing' element={<Suspense fallback={<Preloader />}><ErrorBoundary><Type /></ErrorBoundary></Suspense>}></Route>
          <Route path='code/typing' element={<Suspense fallback={<Preloader />}><ErrorBoundary><TypingCode /></ErrorBoundary></Suspense>}></Route>
          <Route path='captcha/typing' element={<Suspense fallback={<Preloader />}><ErrorBoundary><TypingCapcha /></ErrorBoundary></Suspense>}></Route>
          <Route path='symbols/typing' element={<Suspense fallback={<Preloader />}><ErrorBoundary><TypingSymbols /></ErrorBoundary></Suspense>}></Route>
          <Route path="code" element={<Suspense fallback={<Preloader />}><ErrorBoundary><Code /></ErrorBoundary></Suspense>}></Route>
          <Route path="symbols" element={<Suspense fallback={<Preloader />}><ErrorBoundary><Symbols /></ErrorBoundary></Suspense>}></Route>
          <Route path="captcha" element={<Suspense fallback={<Preloader />}><ErrorBoundary><Capcha /></ErrorBoundary></Suspense>}></Route>
          <Route path="test" element={<Suspense fallback={<Preloader />}><ErrorBoundary><TEST/></ErrorBoundary></Suspense>}></Route>
          <Route path="check-self" element={<Suspense fallback={<Preloader />}><ErrorBoundary><CheckSelf/></ErrorBoundary></Suspense>}></Route>
          <Route path="*" element={<Suspense fallback={<Preloader />}><ErrorBoundary><NF404 /></ErrorBoundary></Suspense>}></Route>
          <Route path="result" element={<Suspense fallback={<Preloader />}><ErrorBoundary><ResultShare /></ErrorBoundary></Suspense>}></Route>
        </Route>
      </Routes>
    </>
  );
})

export default Links;