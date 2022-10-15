import React,{useEffect} from 'react'
import axios from 'axios'
var demo;

export default function blog() {

    useEffect(() => {
      axios.get('http://admin.ilovecompress.appskym.com/api/blogs').then((res)=>{
        console.log( typeof res.data.data.data[0].description,"res");
        demo=res.data.data.data[0].description
      })
    
    }, [])
    console.log(typeof demo,"demo");
  return demo;
}
