import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import EditProduct from '../pages/views/Admin/EditProduct';
import AddProductForm from '../pages/views/Admin/AddProductForm';


const Routers = ({ products, onRemove, onAdd, onUpdate }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleUpdate = (id, product) => {
        onUpdate(id, product)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products' render={(props) =>
                                <ProductsManager {...props} products={products} onRemove={onHandleRemove} />
                            }>
                            </Route>
                            <Route path='/admin/product/add'
                                render={(props) =>
                                    <AddProductForm {...props} onAdd={onAdd} />}></Route>
                            <Route path='/admin/product/:id'
                                render={(props) =>
                                    <EditProduct {...props} products={products} onUpdate={onHandleUpdate} />
                                }
                            >
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products} onRemove={onHandleRemove}/>
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
