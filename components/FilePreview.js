import React,{useState,useEffect} from "react";
import styles from "../styles/FilePreview.module.css";
import Image from "next/image";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import CardHeader from '@mui/material/CardHeader';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
const FilePreview = ({ fileData,dispatch }) => {
  const [file, setfile] = useState([])
  function bytesToSize(bytes) {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0) return "0 Byte";
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
  }
  useEffect(() => {
    setfile(fileData.fileList)
    console.log(fileData.fileList,"fileData.fileList");

  }, [fileData])
  

 const deleteImage=async(i)=>{
 console.log(file,"filehdbbiuijdoijijfidfbeuhfi");

  setfile(file.filter((d,index)=> index !==i));
 

  

 }
  return (
    <div className={styles.fileList}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {file!==undefined &&file.length>0&&file.map((f, index) => {
            console.log(index,"index");
            const size = bytesToSize(f.size);
            const filePreview = URL.createObjectURL(f);
          
           return <Grid item xs={2} sm={3} md={3} key={index}>
            
                <Card sx={{ maxWidth: 350 }} >
                <CardHeader style={{height:"0px"}}  action={
          <IconButton aria-label="settings" style={{marginTop:"-15px"}}   onClick={()=>deleteImage(index) } >
            <CancelSharpIcon />
          </IconButton>
        }>
                  
                </CardHeader>
                  <Image
                    src={filePreview}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                  <CardContent style={{padding:"5px"}}>
               
                      <div key={f.name} className={styles.fileName}>
                       <p> {f.name} <b>[{size}]</b></p> 
                        
                      </div>
                  
                 
                  </CardContent>
                </Card>
              
            </Grid>;
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default FilePreview;
