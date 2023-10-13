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
      <h1>hello</h1>
    </Fragment>
  );
};

export default Home;
