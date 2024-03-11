import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as yup from "yup";

function EditSubcscription() {
  const { id } = useParams();

  // Example user details (replace with actual data retrieval logic)
  const [userDetails, setUserDetails] = useState({
    "Package Name": "Membership Card for age 12-17",
    Amount: "$115",
    "For Age": "12-17 Years Old",
    Status: "Active", // Added Status field
  });

  // Define Yup validation schema
  const checkoutSchema = yup.object().shape({
    "Package Name": yup.string().required("Package Name is required"),
    Amount: yup.string().required("Amount is required"),
    "For Age": yup.string().required("Age is required"),
    Status: yup.string().required("Status is required"), // Make Status required
  });

  const formik = useFormik({
    initialValues: userDetails,
    validationSchema: checkoutSchema,
    onSubmit: (values) => {
      // Logic to update user details
      console.log("Updated user details:", values);
    },
  });

  return (
    <Box m="20px" height="70vh" overflow="auto" paddingRight="20px">
      <Box ml={"40px"}>
        <Grid container spacing={2}>
          {Object.entries(userDetails).map(([field, value]) => (
            <React.Fragment key={field}>
              <Grid item xs={1.8}>
                <Typography variant="h5" component="span" fontWeight="bold">
                  {field}:
                  {checkoutSchema.fields[field] && (
                    <Typography
                      component="span"
                      color="error"
                      style={{ marginLeft: "3px" }} // Adjust margin as needed
                    >
                      *
                    </Typography>
                  )}
                </Typography>
              </Grid>
              <Grid item xs={10.2}>
                {field === "Status" ? (
                  <Select
                    {...formik.getFieldProps(field)}
                    value={formik.values.Status}
                    fullWidth
                    variant="outlined"
                    sx={{ width: "100px" }}
                  >
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                  </Select>
                ) : (
                  <TextField
                    {...formik.getFieldProps(field)}
                    style={{ marginTop: "-10px", width: "60%" }} // Adjust width to 60%
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    multiline={field === "Content"} // Multiline for Content field
                    rows={field === "Content" ? 4 : 1} // Adjust rows for Content field
                  />
                )}
                {formik.touched[field] && formik.errors[field] && (
                  <Typography variant="body2" color="error">
                    {formik.errors[field]}
                  </Typography>
                )}
              </Grid>
            </React.Fragment>
          ))}
          <Box display="flex" justifyContent="right" mt={3}>
            <Button
              onClick={formik.handleSubmit}
              variant="contained"
              sx={{
                backgroundColor: "#6870fa",
                color: "white",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "#3e4396",
                },
              }}
            >
              Update
            </Button>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

export default EditSubcscription;
