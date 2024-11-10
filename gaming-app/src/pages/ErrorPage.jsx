import { Link } from "react-router-dom"
export default function NotFound() {
  return(
    <div className="flex flex-col gap-2">404 Not Found 
        <Link to="/">Home from Link</Link>
          
        {/* The Link above will perform client side routing
         to navigate back to the homepage.*/}
    </div>

  );
};
