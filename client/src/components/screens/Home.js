import React from 'react'

const Home = () => {
    return (
      <div className="home">
        <div className="card home-card">
          <h5>Amrit</h5>
          <div className="card-image">
             <img src="https://images.unsplash.com/photo-1592685444739-bcb532f511f8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAxfHx3YWxscGFwZXIlMjBsYW5kc2NhcGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="img1"/>
          </div>
          <div className="card-content">
            <i className="material-icons" style={{color: 'red'}}>favorite</i>
            <h6>title</h6>
            <p>This is amazing post</p>
            <input type="text" placeholder="Add a comment"/>
          </div>
        </div>

        <div className="card home-card">
          <h5>Amrit</h5>
          <div className="card-image">
             <img src="https://images.unsplash.com/photo-1523978591478-c753949ff840?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAwfHx3YWxscGFwZXIlMjBsYW5kc2NhcGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                   alt="img2"/>
          </div>
          <div className="card-content">
            <i className="material-icons" style={{color: 'red'}}>favorite</i>
            <h6>title</h6>
            <p>This is amazing post</p>
            <input type="text" placeholder="Add a comment"/>
          </div>
        </div>

        <div className="card home-card">
          <h5>Amrit</h5>
          <div className="card-image">
             <img src="https://images.unsplash.com/photo-1555356247-48be98c748d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA2fHx3YWxscGFwZXIlMjBsYW5kc2NhcGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                  alt="img3"/>
          </div>
          <div className="card-content">
            <i className="material-icons" style={{color: 'red'}}>favorite</i>
            <h6>title</h6>
            <p>This is amazing post</p>
            <input type="text" placeholder="Add a comment"/>
          </div>
        </div>
      </div>    
    )
}

export default Home;