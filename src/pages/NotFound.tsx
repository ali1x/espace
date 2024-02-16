import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl">404 Not Found!</h1>
        <p className="text-xl">Try searching somewhere else...</p>
        <Link to="/" className="text-blue-500 border-2 border-blue-500 px-4 py-2 mt-8 rounded-lg">Go Home</Link>
    </div>
  )
}
export default NotFound