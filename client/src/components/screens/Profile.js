import React from 'react';
//import ImageLoader from 'react-image-file';

const Profile = () => {
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
            <h4>Amrit Singh</h4>
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
              <img className="item" src="https://i.imgur.com/py4kjHt.png" alt="img1"/>
              <img className="item" src="https://i.imgur.com/py4kjHt.png" alt="img2"/>
              <img className="item" src="https://i.imgur.com/py4kjHt.png" alt="img3"/>
              <img className="item" src="https://i.imgur.com/py4kjHt.png" alt="img4"/>
              <img className="item" src="https://i.imgur.com/py4kjHt.png" alt="img5"/>
              <img className="item" src="https://i.imgur.com/py4kjHt.png" alt="img6"/>
              <img className="item" src="https://i.imgur.com/py4kjHt.png" alt="img7"/>
              <img className="item" src="https://i.imgur.com/py4kjHt.png" alt="img8"/>
              
              
        </div>
      </div>    
    )
}

export default Profile;