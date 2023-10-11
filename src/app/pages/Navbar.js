import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const Navbar=()=>{
    return (
        <nav className='navbar navbar-default'>
            <Link href="/"> Characters </Link>
            <Link href="/pages/comics"> Comics </Link>
        </nav>
    )
}
export default Navbar;