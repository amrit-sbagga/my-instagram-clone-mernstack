import React, { useState, useEffect } from 'react';
import { CLOUD_NAME } from '../../keys';
import { useHistory } from 'react-router-dom';
import M from 'materialize-css';

const CreatePost = () => {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    useEffect(() => { 
        //useEffect also executes when component mount
        if(url){
            fetch("/createpost",
            {
                method: "post",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : "Bearer " + localStorage.getItem("jwt")
                },
                body : JSON.stringify({
                    title,
                    body,
                    url
                })
            }).then(response => response.json())
            .then(data => {
            if(data.error){
                M.toast({
                    html: data.error,
                    classes : "#c62828 red darken-3"
                })
            } else {
                M.toast({
                    html : "create post success",
                    classes : "#43a047 green darken-1"
                })
                history.push('/')
            }
            console.log(data);
            }).catch(error => {
                console.log(error);
            })
        }
    }, [url])

    const CLOUD_API = "https://api.cloudinary.com/v1_1/" + CLOUD_NAME;

    const postDetails = () => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "insta-clone");
        data.append("cloudname", CLOUD_NAME);
        console.log('data here = ', data)
        fetch(CLOUD_API + "/image/upload", {
            method: "post",
            body:data
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setUrl(data.url);

        })
        .catch(error => {
            console.log(error);
        })

        
    }


    return (
        <div className="card input-filed"
            style={{
                margin: "30px auto",
                maxWidth: '500px',
                padding: '20px',
                textAlign: 'center'
            }}>
            <input type="text" 
                placeholder="title" 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
            <input type="text" 
                placeholder="body" 
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                />
            <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
                <span>Upload Image</span>
                <input type="file"
                       onChange={(e)=>setImage(e.target.files[0])}/>
                       {/* onChange={(e)=>console.log(e.target.files)}/> */}
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text"/>
            </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
              onClick={() => postDetails()}>
                Submit
            </button>
        </div>
    )
}

export default CreatePost;