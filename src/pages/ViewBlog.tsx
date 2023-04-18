import { useParams } from "react-router-dom";
import data from "../data/blogs.json"

export default function ViewBlog() {
    const { id } = useParams();
    const blog: any = data.find(f => f._id === id)

    if(!data) return <b>No Blog Found</b>
    return(
        <>
        <h1>{blog.name}</h1>
        <p>{blog.about}</p>
        <small>{blog.email}</small>
        
        </>

    );
}