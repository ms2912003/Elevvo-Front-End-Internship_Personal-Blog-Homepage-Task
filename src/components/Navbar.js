import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <nav className = "bg-violet-700 shadow-md">
            <div className = "container mx-auto flex justify-between items-center">
                <Link to = "/">
                    <img src = {`${process.env.PUBLIC_URL}/images/Logo.jpg`} alt = "MyLogo" className = "w-50 h-20 rounded-full border-2 border-white shadow flex items-center justify-start object-cover"/>
                </Link> 
                <h1 className = "text-white text-4xl font-bold"> My Blog </h1>
                <ul className = "flex space-x-6 text-white font-medium">
                    <li>
                        <Link to = "/" className = "text-white px-4 py-2 shadow hover:text-gray-200 font-bold text-xl rounded-lg bg-neutral transition"> Home </Link>
                    </li>
                    <li>
                        <Link to = "/" className = "text-white px-4 py-2 shadow hover:text-gray-200 font-bold text-xl rounded-lg bg-neutral transition"> About </Link>
                    </li>
                    <li>
                        <Link to = "/" className = "text-white px-4 py-2 shadow hover:text-gray-200 font-bold text-xl rounded-lg bg-neutral transition"> Posts </Link>
                    </li>
                    <li>
                        <Link to = "/" className = "text-white px-4 py-2 shadow hover:text-gray-200 font-bold text-xl rounded-lg bg-neutral transition"> LifeStyle </Link>
                    </li>
                    <li>
                        <Link to = "/" className = "text-white px-4 py-2 shadow hover:text-gray-200 font-bold text-xl rounded-lg bg-neutral transition"> Family </Link>
                    </li>
                    <li>
                        <Link to = "/" className = "text-white px-4 py-2 shadow hover:text-gray-200 font-bold text-xl rounded-lg bg-neutral transition"> Food </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}