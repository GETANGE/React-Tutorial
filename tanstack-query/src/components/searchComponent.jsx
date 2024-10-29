import { IoIosSearch } from "react-icons/io";

export default function Search() {
    return (
        <div className="search-container bg-slate-100">
            <IoIosSearch className="search-icon" size={30} />
            <input className="search-input bg-slate-100" placeholder="Search..." />
        </div>
    );
}
