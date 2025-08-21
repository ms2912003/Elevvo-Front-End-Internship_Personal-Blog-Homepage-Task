import { motion } from "framer-motion";

function BlogCard ({post}) {
    return (
        <motion.div className = "border rounded p-4 shadow-md flex flex-col h-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}>
            <img src={`${process.env.PUBLIC_URL}/images/${post.image}`} alt={post.title}
            className="w-full h-48 object-cover rounded"/>
            <h2 className = "text-xl font-bold mt-2">{post.title}</h2>
            <p className = "text-gray-400 text-sm">{post.category}</p>
            <p className = "text-gray-600">{post.description}</p>
            <p className = "text-gray-400 text-sm">{post.date}</p>
        </motion.div>
    );
}

export default BlogCard;