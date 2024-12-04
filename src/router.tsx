import { ReactElement, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import("./pages/Home"));

const AppRouter = (): ReactElement => {
    return (
        <Suspense>
            <Routes>
                <Route path='/' element={<Home />}></Route>
            </Routes>
        </Suspense>
    );
}

export default AppRouter