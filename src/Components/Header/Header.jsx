import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import "../Header/Header";
import LowerHeader from "./LowerHeader";
function Header() {
  return (
    <>
      <section className={classes.fixed}>
        <section>
          <div className={classes.header__container}>
            {/* logo section */}
            <div className={classes.logo__container}>
              <a>
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </a>
              <div className={classes.delivery}>
                <span>
                  <SlLocationPin />
                </span>
                <div>
                  <p>Deliver to</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>
            {/* search section */}
            <div className={classes.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" />
              <BsSearch size={25} />
            </div>
            {/* other section */}
            <div className={classes.order__container}>
              <a className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                  alt=""
                />

                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </a>
              <a>
                <div>
                  <p>Hello </p>
                  <span>Sign Out</span>

                  <p>Hello, Sign In</p>
                  <span>Account & Lists</span>
                </div>
              </a>
              <a>
                <p>returns</p>
                <span>& Orders</span>
              </a>
              <a className={classes.cart}>
                <BiCart size={35} />
                <span>0</span>
              </a>
            </div>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
}
export default Header;
