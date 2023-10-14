import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { GetBanner } from "../../actions/bannerAction";
import { getAdminCategories } from "../../actions/categoryAction";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const { loadingb,banner } = useSelector((state) => state.banner);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  useEffect(() => {
    try {
      dispatch(GetBanner())
    } catch (error) {}
  }, [dispatch])
  useEffect(() => {
    dispatch(getAdminCategories());
  }, [dispatch])
  if (banner.length===0) {
    return <Loader/>
  }
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : loadingb ? <Loader /> : (
        <Fragment>
          <MetaData title="the henrys forge" />

          <div className="banner" style={{overflow:'hidden', width:'100%', maxHeight:'400px'}}>
            <img style={{objectFit:'cover'}} src={banner[0].images[0].url} alt="Banner"/>
            {/* <p style={{textTransform:'capitalize'}}>{banner[0].title}</p> */}
            {/* <h1>{banner[0].description}</h1> */}
            {/* <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a> */}
          </div>

          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.slice(0, 20).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          {/* <h2 className="homeHeading" style={{ cursor: 'pointer'}} onClick={() => window.location.href = "/products"}>Click To All Products</h2> */}

        </Fragment>
      )
      }
    </Fragment>
  );
};

export default Home;
