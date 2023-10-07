import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  updateProduct,
  getProductDetails,
} from "../../actions/productAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "./Sidebar";
import { UPDATE_PRODUCT_RESET } from "../../constants/productConstants";
import { getAdminCategories } from "../../actions/categoryAction";
import imageCompression from 'browser-image-compression'

const UpdateProduct = ({ history, match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, product } = useSelector((state) => state.productDetails);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.product);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const { categories } = useSelector((state) => state.categories);

  const productId = match.params.id;

  useEffect(() => {
    if (product && product._id !== productId) {
      dispatch(getProductDetails(productId));
    } else {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setCategory(product.category);
      setStock(product.Stock);
      setOldImages(product.images);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Product Updated Successfully");
      // history.push("/admin/products");
      window.location.href = "/admin/products"
      dispatch({ type: UPDATE_PRODUCT_RESET });
    }
    dispatch(getAdminCategories())
  }, [
    dispatch,
    alert,
    error,
    history,
    isUpdated,
    productId,
    product,
    updateError,
  ]);

  const updateProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", Stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    if (name.length > 250) {
      return alert.error("Product name length should be less than 250 characters")
    }
    dispatch(updateProduct(productId, myForm));
    setImages([]);
    setImagesPreview([]);
    setOldImages([]);
  };

  const updateProductImagesChange = (e) => {
    const withoutCompress = (img) => {
      if (img) {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (fileReader.readyState === 2) {
            setImagesPreview((old) => [...old, fileReader.result]);
          }
          if (result) {
            setImages((old) => [...old, result]);
          }
        }
        fileReader.readAsDataURL(img);
      }
    }
    const files = Array.from(e.target.files);
    if (files.length >= 10) {
      alert.error("Image length should be 10 or less than 10")
      return
    } else {
     
      files.forEach((e) => {
        if (e.type === 'image/jpeg' || e.type === 'image/png' || e.type === 'image/jpg' || e.type === 'image/bmp' || e.type === 'image/webp') {
          const reader = new FileReader();
          reader.onload = () => {
            if (reader.readyState === 2) {
              setImagesPreview((old) => [...old, reader.result]);
            }
          };
          reader.readAsDataURL(e);
          if (e.size > 90000) {
            async function handleImageUpload(event) {
              const imageFile = event
              const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
                initialQuality: 0.7,
                fileType: 'image/jpeg'
              }
              try {
                const compressedFile = await imageCompression(imageFile, options)
                imageCompression.getDataUrlFromFile(compressedFile).then(res => {
                  setImages((old) => [...old, res]);
                })
              } catch (error) {
                console.log(error)
              }
            }
            handleImageUpload(e)
          } else {
            withoutCompress(e)
          }
        } else {
          alert.error("only .jpeg,.jpg,.png, and .webp formats are allowed")
        }
      });
    }
    // files.forEach((file) => {
    //   const reader = new FileReader();

    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setImagesPreview((old) => [...old, reader.result]);
    //       setImages((old) => [...old, reader.result]);
    //     }
    //   };

    //   reader.readAsDataURL(file);
    // });
  };

  return (
    <Fragment>
      <MetaData title="Update Product" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={updateProductSubmitHandler}
          >
            <h1>Update Product</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="number"
                placeholder="Price"
                required
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
            <div>
              <AccountTreeIcon />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate._id} value={cate.name}>
                    {cate.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <StorageIcon />
              <input
                type="number"
                placeholder="Stock"
                required
                onChange={(e) => setStock(e.target.value)}
                value={Stock}
              />
            </div>

            <div id="createProductFormFile">
              <input
                type="file"
                name="images"
                accept="image/*"
                onChange={updateProductImagesChange}
                multiple
              />
            </div>

            <div id="createProductFormImage">
              {oldImages &&
                oldImages.map((image, index) => (
                  <img key={index} src={image.url} alt="Old Product Preview" />
                ))}
            </div>
                  
            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              {
                loading ? <div class="loader"></div> : "Update"
              }
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateProduct;
