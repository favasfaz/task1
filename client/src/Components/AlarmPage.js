import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextField, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addingAlarm} from '../Redux/UserDeteilsRedux'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, setOpen }) {
  const [age, setAge] = React.useState("");
  console.log(age,'age');
  const [text, setText] = React.useState("");
  const [error, setError] = useState('');
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  const [fTime, setFtime] = useState(0);
  const [sTime, setStime] = useState(0);
  const [tTime, setTtime] = useState(0);
  const [dTime, setDtime] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    function getTime(hours, minutes, power, base) {
      let limit = base * power;
      console.log(typeof hours, typeof minutes);
      if (minutes + limit >= 60) {
        minutes = minutes + limit - 60;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        hours += 1;
      } else {
        minutes = minutes + limit;
      }
      return `${hours}:${minutes}`;
    }
    setFtime(getTime(hours, minutes, 1, 15));
    setStime(getTime(hours, minutes, 2, 15));
    setTtime(getTime(hours, minutes, 3, 15));
  }, []);

  const handleText = (e)=>{
    var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    if(e.target.value === ''){
      setError('fill All field')
    }
    else if(format.test(e.target.value)){
      setError('Special charachters not accepted')
    }
    else{
      setError('')
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setAge(e.target.value);
    setDtime(e.target.value);
  };

  const handleSubmit = async() => {
   await dispatch(addingAlarm(age))
    navigate(`/timout/${dTime}`);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Alarm Reminder?"}</DialogTitle>
        <DialogContent sx={{ width: "50vh" }}>
          {error && <Typography color='error.main' variant="body1">{error}</Typography>}
          <DialogContentText id="alert-dialog-slide-description">
            <TextField
              id="standard-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Write Something"
              fullWidth
              variant="standard"
              helperText={error}
              onKeyUp={(e)=>handleText(e)}
            />
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Age</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={(e) => handleChange(e)}

              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={15}>{fTime}</MenuItem>
                <MenuItem value={30}>{sTime}</MenuItem>
                <MenuItem value={45}>{tTime}</MenuItem>
              </Select>
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  disabled={Boolean(
                 error.length !== 0 ||
                 age.length == 0
                )} onClick={handleSubmit}>save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}