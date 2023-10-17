import "./App.css";
import { useEffect, useState, Suspense } from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";

import { useSelector } from "react-redux";
import { loadUser } from "./actions/userAction";
import store from "./store";
const  Cart = React.lazy(() => import("./component/Cart/Cart"));
const  ForgotPassword = React.lazy(() => import("./component/User/ForgotPassword"));
const  ResetPassword = React.lazy(() => import("./component/User/ResetPassword"));
const  Payment = React.lazy(() => import("./component/Cart/Payment"));
const  ConfirmOrder = React.lazy(() => import("./component/Cart/ConfirmOrder"));
const  Shipping = React.lazy(() => import("./component/Cart/Shipping"));
const  NewProduct = React.lazy(() => import("./component/Admin/NewProduct"));
const  MyOrders = React.lazy(() => import("./component/Order/MyOrders"));
const  OrderSuccess = React.lazy(() => import("./component/Cart/OrderSuccess"));
const  CategoryList = React.lazy(() => import("./component/Admin/CategoryList.js"));
const  ProductList = React.lazy(() => import("./component/Admin/ProductList.js"));
const  Dashboard = React.lazy(() => import("./component/Admin/Dashboard.js"));
const  OrderDetails = React.lazy(() => import("./component/Order/OrderDetails"));
const  ProductReviews = React.lazy(() => import("./component/Admin/ProductReviews"));
const  UpdateUser = React.lazy(() => import("./component/Admin/UpdateUser"));
const  UsersList = React.lazy(() => import("./component/Admin/UsersList"));
const  ProcessOrder = React.lazy(() => import("./component/Admin/ProcessOrder"));
const  OrderList = React.lazy(() => import("./component/Admin/OrderList"));
const  UpdateProduct = React.lazy(() => import("./component/Admin/UpdateProduct"));
const  NewCategory = React.lazy(() => import("./component/Admin/NewCategory"));
const  NotFound = React.lazy(() => import("./component/layout/Not Found/NotFound"));
const  About = React.lazy(() => import("./component/layout/About/About"));
const  Contact = React.lazy(() => import("./component/layout/Contact/Contact"));
const  UpdateBanner = React.lazy(() => import("./component/Admin/UpdateBanner"));
const  UploadBanner = React.lazy(() => import("./component/Admin/CreateBanner"));
const  Footer = React.lazy(() => import("./component/layout/Footer/Footer"));
const  Home = React.lazy(() => import("./component/Home/Home"));
const  ProductDetails = React.lazy(() => import("./component/Product/ProductDetails"));
const  Products = React.lazy(() => import("./component/Product/Products"));
const  LoginSignUp = React.lazy(() => import("./component/User/LoginSignUp"));
// const  loadUser = React.lazy(() => import("./actions/userAction/loadUser"));
const  UserOptions = React.lazy(() => import("./component/layout/Header/UserOptions"));
const  Profile = React.lazy(() => import("./component/User/Profile"));
const  ProtectedRoute = React.lazy(() => import("./component/Route/ProtectedRoute"));
const  UpdateProfile = React.lazy(() => import("./component/User/UpdateProfile"));
const  UpdatePassword = React.lazy(() => import("./component/User/UpdatePassword"));
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling animation
    });
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store?.dispatch(loadUser());
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Suspense fallback={<center style={{position:'absolute', top:'50%', right:'50%', transform:"transtlate(-50%,-50%)"}}>Loading..</center>}>
      <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}

      
      <ProtectedRoute exact path="/process/payment" component={Payment} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:keyword" component={Products} />

        {/* <Route exact path="/search" component={Search} /> */}

        <Route exact path="/contact" component={Contact} />

        <Route exact path="/about" component={About} />

        <ProtectedRoute exact path="/account" component={Profile} />

        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

        <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />

        <Route exact path="/password/forgot" component={ForgotPassword} />

        <Route exact path="/password/reset/:token" component={ResetPassword} />

        <Route exact path="/login" component={LoginSignUp} />
        <Route exact path="/cart" component={Cart} />
        {/* <Route exact path="*" component={NotFound} /> */}

        <ProtectedRoute exact path="/shipping" component={Shipping} />

        <ProtectedRoute exact path="/success" component={OrderSuccess} />

        <ProtectedRoute exact path="/orders" component={MyOrders} />

        <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />

        <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
        />
        <ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />
         <ProtectedRoute
          exact
          path="/admin/categories"
          isAdmin={true}
          component={CategoryList}
        />
         <ProtectedRoute
          exact
          path="/admin/category"
          isAdmin={true}
          component={NewCategory}
        />
        <ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
        />

        <ProtectedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
        />
        <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />

        <ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />

        <ProtectedRoute
          exact
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
        />
         <ProtectedRoute
          exact
          path="/admin/uploadbanner"
          isAdmin={true}
          component={UploadBanner}
        />
         <ProtectedRoute
          exact
          path="/admin/updatebanner"
          isAdmin={true}
          component={UpdateBanner}
        />
        <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
      </Switch>
      <Footer />
    </Router>
    </Suspense>
  );
}

export default App;
