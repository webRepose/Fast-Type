import { Routes, Route } from "react-router-dom";
import React, { lazy, memo, Suspense } from "react";
import Preloader from "./Preloader";
import ErrorBoundary from "./ErrorBoundary";
const Home = lazy(() => import("../main/home/Home")),
  History = lazy(() => import("../main/home/History/History")),
  Stats = lazy(() => import("../main/home/Stats/Stats")),
  Course = lazy(() => import("../main/home/Course/Course")),
  Workon = lazy(() => import("../main/home/Workon/Workon")),
  Guids = lazy(() => import("../main/home/Guids/Guids")),
  User = lazy(() => import("../main/home/User/User")),
  HistoryID = lazy(() => import("../main/home/History/HistoryID/HistoryID")),
  Tips = lazy(() => import("../main/home/Tips/Tips")),
  Text = lazy(() => import("../main/text/Text")),
  Code = lazy(() => import("../main/code/Code")),
  TypingCode = lazy(() => import("../main/code/TypingCode/TypingCode")),
  Capcha = lazy(() => import("../main/capcha/Capcha")),
  TypingCapcha = lazy(() => import("../main/capcha/TypingCapcha/TypingCapcha")),
  Symbols = lazy(() => import("../main/symbols/Symbols")),
  TypingSymbols = lazy(() =>
    import("../main/symbols/TypingSymbols/TypingSymbols")
  ),
  NF404 = lazy(() => import("../main/NF404/404")),
  Header = lazy(() => import("../header/Header")),
  Type = lazy(() => import("../main/text/Typing/TypingText")),
  ResultShare = lazy(() =>
    import("../components/TypingBlock/ResultShare/ResultShare")
  ),
  TEST = lazy(() => import("../components/TEST")),
  CheckSelf = lazy(() => import("../main/home/CheckSelf/CheckSelf")),
  Hotkeys = lazy(() => import("../main/home/Hotkeys/Hotkeys"));

const Routed = [
  { path: "/history", component: <History /> },
  { path: "/stats", component: <Stats /> },
  { path: "/user", component: <User /> },
  { path: "/course", component: <Course /> },
  { path: "/workon", component: <Workon /> },
  { path: "/answers", component: <Guids /> },
  { path: "/tips", component: <Tips /> },
  { path: "/history/:id", component: <HistoryID /> },
  { path: "/text", component: <Text /> },
  { path: "/text/typing", component: <Type /> },
  { path: "/code/typing", component: <TypingCode /> },
  { path: "/captcha/typing", component: <TypingCapcha /> },
  { path: "/symbols/typing", component: <TypingSymbols /> },
  { path: "/code", component: <Code /> },
  { path: "/symbols", component: <Symbols /> },
  { path: "/captcha", component: <Capcha /> },
  { path: "/test", component: <TEST /> },
  { path: "/check-self", component: <CheckSelf /> },
  { path: "*", component: <NF404 /> },
  { path: "/result", component: <ResultShare /> },
  { path: "/hotkeys", component: <Hotkeys /> },
];

const Links = memo(() => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Preloader />}>
              <Header />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Preloader />}>
                <ErrorBoundary>
                  <Home />
                </ErrorBoundary>
              </Suspense>
            }
          ></Route>
          {Routed &&
            Routed.map((data, id) => (
              <Route
                key={id}
                path={data.path}
                element={
                  <Suspense fallback={<Preloader />}>
                    <ErrorBoundary>{data.component}</ErrorBoundary>
                  </Suspense>
                }
              ></Route>
            ))}
        </Route>
      </Routes>
    </>
  );
});

export default Links;
