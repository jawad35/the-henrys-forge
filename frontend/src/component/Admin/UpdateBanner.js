import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors } from "../../actions/productAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import SideBar from "./Sidebar";
import { updateBanner } from "../../actions/bannerAction";
import axios from "axios";
import Loader from "../layout/Loader/Loader";
import imageCompression from 'browser-image-compression'
import { BASE_URL } from "../../globalUrl/Urls";

const UploadBanner = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, banner, loadingb } = useSelector((state) => state.banner);
  const { success } = useSelector((state) => state.isBannerUpdate);
  const [images, setImages] = useState([]);
  const [id, setID] = useState(null);
  const [imagesPreview, setImagesPreview] = useState([]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Banner Updated Successfully");
      history.push("/admin/dashboard");
      // dispatch({ type: NEW_Category_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createProductImagesChange = (e) => {
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
    setImages([]);
    setImagesPreview([]);
    files.forEach((e) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          if (e.type === 'image/jpeg' || e.type === 'image/png' || e.type === 'image/jpg' || e.type === 'image/bmp' || e.type === 'image/webp') {
            const reader = new FileReader();
          
            if (e.size > 90000) {
              reader.onload = () => {
                if (reader.readyState === 2) {
                  setImagesPreview((old) => [...old, reader.result]);
                }
              };
              reader.readAsDataURL(e);
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
        }
      };

      reader.readAsDataURL(e);
    })
  }
  const UpdateBannerHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("id", id)
    if (images) {
      images.forEach((image) => {
        myForm.append("images", image);
      });
    }
    dispatch(updateBanner(myForm, id));
  };
  useEffect(async () => {
    try {

      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.get(
        `/api/v1/admin/banner`,
        config
      );
      setImagesPreview(data.banner[0].images)
      setID(data.banner[0]._id)
    } catch (error) { }
  }, [])
  return banner ? <Fragment>
    <MetaData title="Create Category" />
    <div className="dashboard">
      <SideBar />
      <div className="newProductContainer">
        <form
          className="createProductForm"
          encType="multipart/form-data"
          onSubmit={UpdateBannerHandler}
        >
          <h1>Update Banner</h1>
         
          <div id="createProductFormFile">
            <input
              type="file"
              name="images"
              accept="image/*"
              onChange={createProductImagesChange}
            />
          </div>
          <div id="createProductFormImageBanner">
            {imagesPreview.map((image, index) => (
              <img width={50} key={index} src={image.url || image} alt="Product Preview" />
            ))}
          </div>
          <Button
            id="createProductBtn"
            type="submit"
          >
             Update
          </Button>
        </form>
      </div>
    </div>
  </Fragment> : <Loader />
};

export default UploadBanner;