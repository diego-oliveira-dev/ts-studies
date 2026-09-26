import { Link } from 'react-router'

export default function Navbar() {
    return (
        <nav>
            <Link to={"/"}>Home | </Link>
            <Link to={"/likes"}>Like counter | </Link>
            <Link to={"/cats"}>Cat Generator</Link>
        </nav>
    )
}