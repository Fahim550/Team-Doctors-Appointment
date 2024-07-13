import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
export default function Navbars() {
  const userLogOut = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("Adminemail");
    window.location.reload();
    
  };
  return (
    <div className="fixed z-50 drop-shadow-xl">
      <nav className="hidden sm:block bg-blue-900 dark:bg-gray-700 ">
        <div className="w-screen-xl px-4 py-3 mx-auto">
          <div className=" items-center">
            <ul className="flex  justify-between font- mt-0   text-sm ">
              <div className=" flex  space-x-8">
                <li>
                  <a
                    href="#"
                    className="flex text-white gap-2 dark:text-white hover:underline"
                    aria-current="page"
                  >
                    <svg
                      className="w-6 h-6 text-white dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                    </svg>
                    +1 236-7070-77
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex text-white gap-2 dark:text-white hover:underline"
                  >
                    <svg
                      className="w-6 h-6 text-white dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    ahmedfahim2006@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex text-white gap-2 dark:text-white hover:underline"
                  >
                    <svg
                      className="w-6 h-6 text-white dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    sylhet,bangladesh
                  </a>
                </li>
              </div>

              <div className="flex  space-x-4">
                <li>
                  <svg
                    className="w-6 h-6 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    className="w-6 h-6 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    className="w-6 h-6 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li></li>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      <Navbar fluid rounded className="w-screen">
        <Navbar.Brand >
          <Link to={'/'} className="flex">
          <img
            src={logo}
            className="h-12 sm:h-12"
            alt=" Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          ZocDoc
          </span>
          </Link>
          
        </Navbar.Brand>
        <div className="flex  md:order-2 mr-6 space-x-4">
          {sessionStorage.getItem("email") || sessionStorage.getItem("Adminemail")?(
            <Dropdown
            className=""
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">user</span>
              {/* <Link to="/admin/login" className="block text-sm">admin login</Link> */}
              
            </Dropdown.Header>
            
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => userLogOut()}>Sign out</Dropdown.Item>
          </Dropdown>
            // <button >Logout</button>
            // <Link to="/signup">SignUp</Link>
          ):(
            <Link to="/login" className="bg-blue-700 text-white font-semibold rounded-lg p-1.5 hover:bg-blue-500">Login</Link>
          )}
          
          <Navbar.Toggle className="md:hidden "/>
        </div>
        <div className="flex space-x-8">
          <Navbar.Collapse>
            <Link to="/" active>
              Home
            </Link>
            <Link to=''>About</Link>
            <Link to="/services">Services</Link>
            <Link to="/doctors">Doctors</Link>
            <Link href="#">Contact</Link>
            {sessionStorage.getItem("Adminemail")?(
            <Link to='/dashboard'>Dashboard</Link>

            ):""}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
