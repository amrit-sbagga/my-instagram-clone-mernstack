import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../App';

const Home = () => {
    const [ data, setData ] = useState([])
    const { state, dispatch } = useContext(UserContext);
    useEffect(() => {
      fetch('/allpost', {
        headers:{
          Authorization : "Bearer " + localStorage.getItem('jwt')
        }
      }).then(res => res.json())
      .then(result => {
        console.log("result = ", result)
        setData(result.posts);
      })
    }, [])


    const likePost = (id) => {
        fetch('/like', {
          method : "put",
          headers : {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + localStorage.getItem("jwt")
          },
          body : JSON.stringify({
            postId: id
          }) 
        }).then(res => res.json())
        .then(result => {
          //console.log(result);
          const newData = data.map(item => {
            if(item._id === result._id){
              return result;
            }else{
               return item;
            }
          })
          setData(newData);
        }).catch(err => {
          console.log(err)
        })
    }

    const unlikePost = (id) => {
        fetch('/unlike', {
          method : "put",
          headers : {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + localStorage.getItem("jwt")
          },
          body : JSON.stringify({
            postId: id
          }) 
        }).then(res => res.json())
        .then(result => {
          //console.log(result);
          const newData = data.map(item => {
            if(item._id === result._id){
              return result;
            }else{
               return item;
            }
          })
          setData(newData);
        }).catch(err => {
          console.log(err)
        })
    }

    return (
      <div className="home">
        {
          data.map(item => {
            return(
              <div className="card home-card" key={item._id}>
                <h5>{item.postedBy.name}</h5>
                <div className="card-image">
                  {/* <img src="https://images.unsplash.com/photo-1592685444739-bcb532f511f8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAxfHx3YWxscGFwZXIlMjBsYW5kc2NhcGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="img1"/> */}
                  <img src={item.photo} alt="img1" width="250px" height="250px" />
                </div>
                <div className="card-content">
                  <i className="material-icons" style={{color: 'red'}}>favorite</i>
                  {item.likes.includes(state._id)
                  ?
                    <i className="material-icons"
                        onClick={() => unlikePost(item._id)}>thumb_down</i>
                  :
                    <i className="material-icons"
                        onClick={() => likePost(item._id)}>thumb_up</i>
                  }
                  
                  <h6>{item.likes.length} likes</h6>
                  <h6>{item.title}</h6>
                  <p>{item.body}</p>
                  <input type="text" placeholder="Add a comment"/>
                </div>
              </div>
            )      
          })
        }
      </div>    
    )
}

export default Home;