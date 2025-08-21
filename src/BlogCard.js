function BlogCard ({post}) {
    return (
        <div className = "border rounded p-4 shadow-md">
            <img src = "{post.image} alt = {post.title} w-full h-40"/>
            <h2 className = "text-xl font-bold mt-2">{post.title}</h2>
            <p className = "text-gray-400 text-sm">{post.category}</p>
            <p className = "text-gray-600">{post.description}</p>
            <p className = "text-gray-400 text-sm">{post.date}</p>
        </div>
    );
}

export default BlogCard;