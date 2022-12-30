import React,{useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    // handle toggle
    const handleToggle = () => {
        setToggle(!toggle);
      };
  return (
    <React.Fragment>
      <section>
        <div className="h-20 w-auto shadow-2xl bg-blue-900 flex justify-between items-center px-5">
          {/* logo section */}
          <div>
          <p className="text-2xl uppercase font-bold md:text-3xl "> grid landing page</p>
          </div>

          {/* large screen */}
          <div></div>

          {/* small screen */}
          <div className="text-2xl">
            {
                toggle === false ?
                <FaBars onClick={handleToggle}/>:
                <FaTimes onClick={handleToggle}/>
            }
          
		
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
