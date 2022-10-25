//import { LazyPage1,LazyPage2,LazyPage3 } from "../01-Lazyload/pages";
import {lazy,LazyExoticComponent} from 'react'
import { NoLazy } from '../01-Lazyload/pages/NoLazy';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

type JSXComponent = () => JSX.Element;

interface Route{
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

const Lazylayout = lazy(() => import(/*webpackChunkName: "LazyPage1"*/ '../01-Lazyload/layout/Lazylayout'));


export const routes:Route[] =[
    {
        to:'/lazyload/lazy1',
        path: '/lazyload/*',
        Component:Lazylayout,
        name: 'lazy Dash'
    },
    {
        to:'/no-lazy',
        path: 'no-lazy',
        Component:NoLazy,
        name: 'lazy-2'
    },
    {
        to:'/',
        path: '/',
        Component:ShoppingPage,
        name: 'Shopping Page'
    }

]


