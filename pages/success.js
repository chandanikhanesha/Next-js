import React, { useEffect, useState } from "react";
import styles from "../styles/DropZone.module.css";

import imageCompression from "browser-image-compression";
import Image from "next/image";
import { useRouter } from "next/router";

import Router from "next/router";


import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
export default function success() {
  const [compressData, setcompressData] = useState([]);
  const [orignalData, setorignalData] = useState([]);

  const query = useRouter();
  const router = useRouter();
  function download(source) {
    source.filter((sourceData) => {
      const filePreview = sourceData.name;
      const fileName = filePreview.split("/").pop();
      var el = document.createElement("a");
      el.setAttribute("href", filePreview);
      el.setAttribute("download", `compress-${fileName}`);
      document.body.appendChild(el);
      el.click();
      el.remove();
    });
  }

  function bytesToSize(bytes) {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0) return "0 Byte";
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
  }
  useEffect(() => {
    const cdata =
      query.query &&
      query.query.compressData !== undefined &&
      JSON.parse(query.query.compressData);
    const odata =
      query.query &&
      query.query.orignalData !== undefined &&
      JSON.parse(query.query.orignalData);
    setorignalData(odata);
    setcompressData(cdata);

    const { pathname } = Router;
    if (query.query.compressData == undefined && pathname == "/success") {
      router.push({
        pathname: "/",
      });
    }
  }, [query]);

  console.log(compressData, "compressData", orignalData);
  return (
    <div style={{display:"flex"}}>

<ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem>
      {compressData.length>0 &&compressData.map((item) => {
     
        return(
       <>
        <ImageListItem key={item.name}><>
       

                    <Image
                        src={item.name}
                       
                       alt={item.name}
                       loading="lazy"
                      width={500}
                      height={500}
                   
                    />
          <ImageListItemBar
            title={bytesToSize(item.size)}
            subtitle={item.orignalName}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.type}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
          </>
        </ImageListItem>
        </>
      )}
      
      )}
    </ImageList>
    {compressData.length > 0 && (
          <button onClick={() => download(compressData)} className={styles.downloadBtn}>download img</button>
        )}
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem>
      {orignalData.length>0 &&orignalData.map((item) => {
     
        return(
       <>
        <ImageListItem key={item.name}><>
       

                    <Image
                        src={item.name}
                       
                       alt={item.name}
                       loading="lazy"
                      width={500}
                      height={500}
                   
                    />
          <ImageListItemBar
            title={bytesToSize(item.size)}
            subtitle={item.orignalName}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.type}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
          </>
        </ImageListItem>
        </>
      )}
      
      )}
    </ImageList>
      
    </div>
  );
}
{/* <div className={styles.fileContainer}>
       
        {compressData.length > 0 &&
          compressData.map((f) => {
            const size = bytesToSize(f.size);

            return (
              <>
                <ol>
                  <li key={f.lastModified} className={styles.fileList}>
                   
                    <Image
                      src={f.name}
                      alt="Picture of the author"
                      width={500}
                      height={500}
                  
                    />
                    <div key={f.name} className={styles.fileName}>
                      {f.name} {size}
                    </div>
                  </li>
                </ol>
              </>
            );
          })}
      
        {orignalData.length > 0 &&
          orignalData.map((f) => {
            const size = bytesToSize(f.size);

            return (
              <>
                <ol>
                  <li key={f.lastModified} className={styles.fileList}>
             
                    <Image
                      src={f.name}
                      alt="Picture of the author"
                      width={500}
                      height={500}
                   
                    />
                    <div key={f.name} className={styles.fileName}>
                      {f.name} {size}
                    </div>
                  </li>
                </ol>
              </>
            );
          })}
      </div> */}