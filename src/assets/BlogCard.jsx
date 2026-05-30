import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = (props) => {

    const tagColors = {
        Featured: "blue",
        React: "green",
        JavaScript: "orange",
        Performance: "orange",
        CSS: "purple",
        Deployment: "purple",
    };

    return (
        <div className="blog-card-container">
            <div className="blog-image-container">
                <span style={{ backgroundColor: tagColors[props.imageTag] || "gray" }}>{props.imageTag}</span>
                <img src={props.image} alt={props.heading.split("").splice(0, 8).join("")} />
            </div>
            <div className="blog-post-data-container">
                <div className="blog-post-date">
                    {props.blogDate}
                </div>
                <h4>{props.heading.split("").splice(0, 25).join("")} ...</h4>
                <p>{props.paragraph.split("").splice(0, 70).join("")}...<Link to={props.readMoreLink}> Read More...</Link></p>
            </div>
        </div>
    )
}

export default BlogCard