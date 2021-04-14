import React from 'react';
import { Layout, Menu, Breadcrumb, Badge  } from 'antd';
import '../css/navigation.css';
import FooterHome from './footer';
import HeaderHome from './header';
import Home from '../pages/Home';
import Detalle from '../pages/Detalle';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const { Content } = Layout;

const SideNav = () => {
        return (
            <Router>
                <Layout>
                <HeaderHome />
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/detalle/:id" component={Detalle}>
                            </Route>
                        </Switch>
                    </div>
                </Content>
                <FooterHome />
                </Layout>
            </Router>
    )
}

export default SideNav;