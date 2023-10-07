import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors } from "../../actions/productAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import SideBar from "./Sidebar";
import { NEW_Category_RESET } from "../../constants/categoryConstants";
import { createBanner, GetBanner } from "../../actions/bannerAction";
import { Link } from "react-router-dom";
const UploadBanner = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, successb } = useSelector((state) => state.createbanner);
  const { banner } = useSelector((state) => state.banner);
  const [images, setImages] = useState([]);
  const [,setImagesPreview] = useState([]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (successb) {
      alert.success("Banner Created Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: NEW_Category_RESET });
    }
  }, [dispatch, alert, error, history, successb]);
  useEffect(() => {
    try {
      dispatch(GetBanner())
    } catch (error) { }
  }, [dispatch])
  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };
  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createBanner(myForm));
  };
  return (
    <Fragment>
      <MetaData title="Create Category" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1>Upload Banner</h1>
            {
              banner ? <>
              <p>Banner is Already Uploaded</p> 
              <Link to="/admin/updatebanner">Update Banner</Link>
              </> : <>
                <div id="createProductFormFile">
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={createProductImagesChange}
                  />
                </div>
              </>
            }
            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UploadBanner;
