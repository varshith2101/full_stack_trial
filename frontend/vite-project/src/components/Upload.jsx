import React from "react";
import { useState } from "react";
import "./styling.css"
import { Editor } from "@tinymce/tinymce-react";

function Upload() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [date,setDate] = useState('');

    function submitted(e){
        e.preventDefault(); // stops page from reloading, kinda defeats the whole point of useState

        const article_object = {title,content,author,thumbnail,date};
        console.log(title,content,author,thumbnail,date);
        console.log(article_object);

        fetch( 'https://your-backend-name.onrender.com/articles/' , {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(article_object)
        }).then(() => {console.log("Article added to the database")})


    }

    const handleEditorChange = (content) => {
        setContent(content);
      };

    const handleImageUpload = (blobInfo, success, failure) => {
      const url = prompt("Enter the image URL:");
      if (url) {
        success(url); // Insert the image URL into the editor
      } else {
        failure("Image URL is required"); // Show an error if no URL is entered
      }
    };


    return (
        <div className="form-container">
            <h2>Add a new Article</h2>
            <form onSubmit={submitted}>

                <label>Title :</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange = {(e) => setTitle(e.target.value) }
                //  e is the currently typed shit in the text box 
                //qs710aoljisctiytkhda6com6dqcnb3u8u8ka8e6mquajw5h
                />
            

                <label>Content :</label>
                <Editor
                    apiKey="qs710aoljisctiytkhda6com6dqcnb3u8u8ka8e6mquajw5h" 
                    value={content}
                    onEditorChange={handleEditorChange}
                    init={{
                        max_height: 600,
                        menubar: false,
                        plugins: ["link", "image", "lists", "textcolor"],
                        toolbar:
                        "bold italic underline | h2 h3 p | link image | bullist numlist | forecolor backcolor",
                        images_upload_handler: handleImageUpload, // Custom image upload function
                    }}
                    />

                <label>Author :</label>
                <textarea 
                    required
                    value={author}
                    onChange = {(e) => setAuthor(e.target.value) }
                />

                <label>Thumbnail link :</label>
                <textarea 
                    required
                    value={thumbnail}
                    onChange = {(e) => setThumbnail(e.target.value) }
                />

                <label>Date :</label>
                <textarea 
                    required
                    value={date}
                    onChange = {(e) => setDate(e.target.value) }
                />

                <button type="submit">Add Article</button>
             </form>
        </div>
    )
}

export default Upload;