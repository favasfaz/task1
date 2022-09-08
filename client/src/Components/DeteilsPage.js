import React from "react";
import {
  Button,
  Paper,
  TextField,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Formik } from "formik";
import {detailsValidation} from '../formValidation/deteilsValidation'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DeteilsPage() {
    const handleSubmit = async(e,values)=>{
        try {
            await axios.post('/api/users/addDeteils',values)
            toast("Successfully created")
        } catch (error) {
            toast('🦄 Wow so easy!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }
  return (
    <Grid container mt={5}>
      <Paper
        elevation={10}
        style={{ padding: 40, height: "60vh", width: 360, margin: "20px auto" }}
      >
        <Grid align="center" alignItems="center" justifyContent="center">
          <Typography mt={2} variant="h5">
            Add Deteils
          </Typography>
        </Grid>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            projects: "",
          }}
          validationSchema={detailsValidation}
        >
          {({
            handleChange,
            values,
            errors,
            touched,
            handleBlur,
            onSubmit,
          }) => (
            <div>
              <Grid mt={5}>
                <TextField
                  required
                  style={{ marginTop: "10px" }}
                  label="Email"
                  type="email"
                  name="email"
                  fullWidth
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
                <TextField
                  required
                  style={{ marginTop: "20px" }}
                  label="phone"
                  fullWidth
                  name="phone"
                  error={Boolean(touched.phone && errors.phone)}
                  helperText={touched.phone && errors.phone}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                />
                <TextField
                  required
                  style={{ marginTop: "20px" }}
                  label="name"
                  name="name"
                  fullWidth
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                />
                <FormControl fullWidth style={{ marginTop: "20px" }}>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    name="projects"
                    error={Boolean(touched.projects && errors.projects)}
                  helperText={touched.projects && errors.projects}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.projects}
                  >
                    <MenuItem value='Project1'>Project1</MenuItem>
                    <MenuItem value='Project2'>Project2</MenuItem>
                    <MenuItem value='Project3'>Project3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid mt={3}></Grid>
              <Button
               onClick={(e) => handleSubmit(e, values)}
                type="submit"
                variant="contained"
                disabled={Boolean(
                    errors.email ||
                      values.email === "" ||
                      errors.phone ||
                      values.phone === "" ||
                      errors.projects ||
                      values.projects === "" ||
                      errors.name ||
                      values.name === "" 
                  )}
                style={{
                  color: "white",
                  backgroundColor: "darkblue",
                  marginTop: "5px",
                }}
                fullWidth
              >
                Submit
              </Button>
            </div>
          )}
        </Formik>
      </Paper>
      <ToastContainer />
    </Grid>
  );
}

export default DeteilsPage;
