import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import '../Admin/productList.css'
import '../Home/Home.css'
import { useSelector, useDispatch } from "react-redux";
import { clearErrors } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";
import axios from "axios";
import moment from 'moment'
import { useParams } from "react-router-dom";
import { GetBanner } from "../../actions/bannerAction";
const Products = ({ match }) => {
  const dispatch = useDispatch();
  const { keyword } = useParams()
  const alert = useAlert();
  const { categories } = useSelector((state) => state.categories);
  const { loadingb,banner } = useSelector((state) => state.banner);

  const {
    error
  } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 5000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const [search, setSearch] = useState('');
  const [Products, setProducts] = useState([]);
  const [AllProducts, setAllProdcuts] = useState([]);
  const [perPageItems,] = useState(20)
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const handleQuery = (rat, pri, cat, newSearch) => {
    setCategory(cat)
    setPrice(pri)
    setRatings(rat)
    setSearch(newSearch)
    const queryProducts = AllProducts.filter(pro => pro.ratings >= rat && moment(pro.price).isBetween(pri[0], pri[1]) && pro.category.toLowerCase().includes(cat.toLowerCase()) && (pro.name.toLowerCase().includes(newSearch.toLowerCase())))
    if (rat === 0 && pri[0] === 0 && cat === '' && newSearch === '') {
      const start = currentPage * perPageItems - perPageItems
      const end = currentPage * perPageItems
      const currentProducts = AllProducts.slice(start, end)
      setCount(AllProducts.length)
      setProducts(currentProducts)
    } else {
      setCount(queryProducts.length)
      setProducts(queryProducts)
    }
  }
  const setCurrentPageNo = (e) => {
    setProducts(AllProducts.slice(e * perPageItems - perPageItems, e * perPageItems))
    setCurrentPage(e);
  };
  useEffect(() => {
    try {
      dispatch(GetBanner())
    } catch (error) {}
  }, [dispatch])
  const GetProducts = () => {
    axios.get('/api/v1/products')
      .then((res) => {
        if (keyword) {
          setProducts(res.data.products.filter(pro => pro.category === keyword).slice(0, perPageItems))
          setCount(Products.length)
          setCategory(keyword)
        } else {
          setProducts(res.data.products.slice(0, perPageItems))
          setCount(res.data.products.length)
          setCategory("")
        }
        setAllProdcuts(res.data.products)
        setLoading(false)
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err)
      })
  }
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    // dispatch(getProduct());
    GetProducts()
    setCategory("axe")
  }, [dispatch, alert, error]);
  
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div style={{overflow:'hidden'}}>
          <MetaData title="PRODUCTS -- the henrys forge" />
          <div className="banner">
            {
              loadingb ? <Loader/> : <img src={banner[0]?.images[0]?.url} alt="Banner"/>
            }
          </div>
          <div className="cateSearchBox" style={{ background: 'white' }}>

            {/* <input className="searchbtn" type="button" value="Search" onClick={() => filteredListProduct()}/> */}
            <div className="filterFields">
              <select
                value={category}
                onChange={(e) => handleQuery(ratings, price, e.target.value, search)}
                className="categoryBox"
                style={{ textTransform: 'capitalize' }}
              >
                <option style={{ textTransform: 'capitalize' }} value="">All</option>
                {categories.map((cate) => (
                  <option style={{ textTransform: 'capitalize' }} key={cate._id} value={cate.name}>
                    {cate.name}
                  </option>
                ))}
              </select>
              <div className="sliderBox">
                <div className="price-slider">
                  <Typography>Price</Typography>
                  <Slider
                    value={price}
                    onChange={(e, newPrice) => handleQuery(ratings, newPrice, category, search)}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    min={0}
                    max={5000}
                  />
                </div>
                <div className="rating-slider">
                  <Typography component="legend">Ratings</Typography>
                  <Slider
                    value={ratings}
                    onChange={(e, newRating) => {
                      handleQuery(newRating, price, category, search)
                    }}
                    aria-labelledby="continuous-slider"
                    valueLabelDisplay="auto"
                    min={0}
                    max={5}
                  />
                </div>
              </div>
            </div>
            <input
              type="text"
              className="searchInput"
              placeholder="Search Product..."
              onChange={(e) => handleQuery(ratings, price, category, e.target.value)}
            />
          </div>
          <h2 className="productsHeading">Products</h2>
          <div className="products">
            {Products &&
              Products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          {perPageItems <= count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={perPageItems}
                totalItemsCount={count}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Products;
