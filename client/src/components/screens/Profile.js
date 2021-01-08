import React, { useEffect, useState, useContext } from 'react';
//import ImageLoader from 'react-image-file';
import { UserContext } from '../../App'

const Profile = () => {
  const [ mypics, setPics ] = useState([])
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    fetch('/mypost', {
      headers : {
        Authorization : "Bearer " + localStorage.getItem('jwt')
      }
    }).then(response => response.json()) //parsing
    .then(result => {
      console.log("profile result = ", result);
      setPics(result.mypost)
    })
  }, [])
  // const dataUrl = "blob:https://pasteboard.co/e2b6183b-8df2-49ca-bf25-ebc26c8e0f03";
  //const myImg = URL.createObjectURL(dataUrl);
    return (
      <div style={{ maxWidth:"550px", margin:"0px auto"}}>
        <div style={{
              display:"flex", 
              justifyContent:"space-around",
              margin:"18px 0px",
              borderBottom:"1px solid grey"}}>
          <div>
            <img style={{
              width:"160px",height:"160px",borderRadius:"80px"}} 
              src="https://i.imgur.com/py4kjHt.png" alt="profimg"/>
           
            {/* <ImageLoader file={dataUrl} alt='some text'
                style={{
                    width:"160px",height:"160px",borderRadius:"80px"}}/> */}
          </div>
          <div>
              <h4>{state?state.name:"loading"}</h4>
              <div style={{
                      display:"flex", 
                      justifyContent:"space-between",
                      width:"120%"
                      }}>
                <h6>40 posts</h6>
                <h6>40 followers</h6>
                <h6>40 following</h6>
              </div>
          </div>
        </div>
      
        <div className="gallery">
          {
            mypics.map(item => {
              return(
                <img className="item"
                    key = {item._id} 
                    src = {item.photo} 
                    alt = {item.title}/>
              )
            })
          }
              
        </div>
      </div>    
    )
}

export default Profile;