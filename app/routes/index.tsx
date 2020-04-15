import { Route } from "react-router-dom"
import LoginPage from "../containers/LoginPage";
import HomePage from "../containers/HomePage";
import CounterPage from "../containers/CounterPage";

const routes = [
    {
        url: '/',
        path: '/',
        exact: true,
        component: LoginPage,
        route: Route
    },
    {
        url: '/home',
        path: '/home',
        exact: true,
        component: HomePage,
        route: Route
    },
    {
        url: '/counter',
        path: '/counter',
        exact: true,
        component: CounterPage,
        route: Route
    }
]

export {routes}