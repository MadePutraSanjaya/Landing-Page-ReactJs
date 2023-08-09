function Navbar() {
  return (
    <>
      <div className="navbar bg-gray-100 text-slate-600	fixed z-10">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-rose-700	">
            Seafood Bakar
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#aboutus">About Us</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#map">Our Location</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar