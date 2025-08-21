import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogCard from './BlogCard';
import { useState } from "react";
import Footer from "./components/Footer";

const Post = [
  {
    id: "1",
    title: "Meet Our Family",
    image: '1.jpg',
    description: "Introducing our lovely family and our journey together.",
    date: "Mar 22, 2025",
    category: "Family",
  },
  {
    id: "2",
    title: "Trip to Paris",
    image: "/2.jpg",
    description: "Exploring the beautiful streets of Paris and its culture.",
    date: "Apr 10, 2025",
    category: "Travel",
  },
  {
    id: "3",
    title: "Delicious Pasta Recipe",
    image: "/3.jpg",
    description: "Learn how to make a creamy and delicious pasta at home.",
    date: "May 5, 2025",
    category: "Food",
  },
  {
    id: "4",
    title: "My First Coding Project",
    image: "/4.jpg",
    description: "Sharing my first project in React and the lessons learned.",
    date: "Jun 15, 2025",
    category: "Tech",
  },
  {
    id: "5",
    title: "Family Picnic Day",
    image: "/5.jpg",
    description: "A sunny day out with the whole family enjoying nature.",
    date: "Jul 8, 2025",
    category: "Family",
  },
  {
    id: "6",
    title: "Backpacking in Thailand",
    image: "/6.jpg",
    description: "An adventurous backpacking trip in Thailand’s islands.",
    date: "Aug 12, 2025",
    category: "Travel",
  },
  {
    id: "7",
    title: "5 Easy Breakfast Recipes",
    image: "/7.jpg",
    description: "Quick and healthy breakfast ideas for busy mornings.",
    date: "Sep 3, 2025",
    category: "Food",
  },
  {
    id: "8",
    title: "Learning React Hooks",
    image: "/8.png",
    description: "A beginner’s guide to using hooks in React projects.",
    date: "Sep 15, 2025",
    category: "Tech",
  },
  {
    id: "9",
    title: "Exploring the Alps",
    image: "/9.jpg",
    description: "Hiking and sightseeing in the breathtaking Alps.",
    date: "Oct 1, 2025",
    category: "Travel",
  },
  {
    id: "10",
    title: "Family Movie Night",
    image: "/10.jpg",
    description: "Sharing our fun movie night traditions with the kids.",
    date: "Oct 12, 2025",
    category: "Family",
  },
  {
    id: "11",
    title: "Chocolate Cake Recipe",
    image: "/11.jpg",
    description: "How to bake a rich and moist chocolate cake at home.",
    date: "Nov 5, 2025",
    category: "Food",
  },
  {
    id: "12",
    title: "Building a Personal Portfolio",
    image: "/12.jpg",
    description: "Step by step guide to create your own portfolio website.",
    date: "Nov 20, 2025",
    category: "Tech",
  },
  {
    id: "13",
    title: "Road Trip Across USA",
    image: "/13.jpg",
    description: "Experiencing the diverse landscapes and cities across the USA.",
    date: "Dec 1, 2025",
    category: "Travel",
  },
  {
    id: "14",
    title: "Fun Family Games",
    image: "/14.jpg",
    description: "Indoor and outdoor games that the whole family can enjoy.",
    date: "Dec 10, 2025",
    category: "Family",
  },
  {
    id: "15",
    title: "5-Minute Healthy Snacks",
    image: "/15.jpg",
    description: "Quick snacks you can make in under 5 minutes.",
    date: "Dec 18, 2025",
    category: "Food",
  },
  {
  id: "16",
  title: "Morning Yoga Routine",
  image: "/16.jpg",
  description: "Start your day energized with this simple morning yoga routine.",
  date: "Jan 5, 2026",
  category: "Health",
},
{
  id: "17",
  title: "Visiting Tokyo",
  image: "/17.jpg",
  description: "Exploring the vibrant streets, culture, and food of Tokyo, Japan.",
  date: "Jan 20, 2026",
  category: "Travel",
},
];


function Home() {
  return <h2 className="p-6 text-xl">Home</h2>;
}

function About() {
  return <h2 className="p-6 text-xl">About</h2>;
}

function Posts() {
  return <h2 className="p-6 text-xl">Posts</h2>;
}

function LifeStyle() {
  return <h2 className="p-6 text-xl">LifeStyle</h2>;
}

function Family() {
  return <h2 className="p-6 text-xl">Family</h2>;
}

function Food() {
  return <h2 className="p-6 text-xl">Food</h2>;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Tech", "Travel", "Food", "Family", "Health"];

  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const filteredPosts =
  Post
    .filter((post) => selectedCategory === "All" || post.category === selectedCategory)
    .filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div>
      <Navbar />
      <div className="mb-10"></div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/lifestyle" element={<LifeStyle />} />
        <Route path="/family" element={<Family />} />
        <Route path="/food" element={<Food />} />
      </Routes>
      <Header />
      <div className="mb-10"></div>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search posts..."
          className="border p-2 rounded w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex justify-center mb-6 space-x-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded ${
              selectedCategory === cat ? "bg-purple-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {currentPosts.map((post) => (
          <BlogCard key = {post.id} post = {post}/>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-3 h-3 rounded-full cursor-pointer inline-block ${
            currentPage === index + 1 ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></span>
      ))}
    </div>
    <div className="max-w-6xl mx-auto p-4"></div>
    <Footer />
    </div>
  );
}

export default App;
