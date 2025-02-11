import React from 'react';
import { Route, useParams } from 'react-router-dom';

import products from './../src/products.json';
import Shop from '../src/components/Shop';

const CategoryPage = () => {
    const  { category } = useParams()

    const list = products.filter(product => category.toLowerCase() === product.category.toLowerCase())
    if (list.length === 0) {
        return <p>Kategoria, której szukasz nie istnieje.</p>
    }

    return <Shop list={list} />
}

const Task03 = () => {
    return (
        <>
            <h1>Task03</h1>
            <Route exact path='/task03'>
                <Shop list={products} />
            </Route>
            <Route path={'/task03/:category'}>
                <CategoryPage />
            </Route>
        </>
    );
}

export default Task03;

