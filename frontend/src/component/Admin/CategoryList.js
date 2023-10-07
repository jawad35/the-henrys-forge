import React, { Fragment, useEffect} from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
} from "../../actions/productAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { getAdminCategories, deleteCategory } from "../../actions/categoryAction";
import { DELETE_CATEGORY_RESET } from "../../constants/categoryConstants";
const ProductList = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, categories } = useSelector((state) => state.categories);
  const { isDeleted} = useSelector((state) => state.deletecategory);
  const deleteCatgeoryHandler = (id) => {
    dispatch(deleteCategory(id));
  };
if (isDeleted === true) {
  dispatch(getAdminCategories());
  alert.success("Category Deleted Successfully");
  dispatch({ type: DELETE_CATEGORY_RESET });
}
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
   
    if(!isDeleted){
      dispatch(getAdminCategories());
    }
  }, [dispatch, error, alert, isDeleted]);

  const columns = [
    // { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            {/* <Link to={`/admin/cetegory/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link> */}

            <Button
              onClick={() =>
                deleteCatgeoryHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];
  categories &&
    categories.forEach((item) => {
      rows.push({
        id: item._id,
        description: item.description,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL Categories - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL CATEGORIES</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
