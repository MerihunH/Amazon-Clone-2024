import React from "react";

function Header() {
  return (
    <section>
      <section>
        <div>
          {/* logo */}
          <a href="/">
            <img
              src="https://pngimg.com/uploads/amazon/small/amazon_PNG25.png"
              alt="Amazon logo"
            />
          </a>
          {/* delivery */}
          <span> </span>
          <div>
            <p>Delivery to</p>
            <sapn>Ethiopia</sapn>
          </div>
        </div>

        <div>
          {/* search */}
          <select name="" id="">
            <option value="">All</option>
            <input type="text" name="" id="" placeholder="Search Product" />
          </select>
        </div>
        {/* Right side */}
        <div>
          <div>
            <img
              src="https://image.shutterstock.com/image-vector/american-flage-vector-design-templet-260nw-2317427731.jpg"
              alt="Flage of USA"
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </div>
          {/* three Components */}
          <a href="">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>
          {/* orders */}
          <a href="">
            <p>Returns</p>
            <span>& orders</span>
          </a>
          {/* cart */}
          <a href="">
            {/* icon */}
            <span>0</span>
          </a>
        </div>
      </section>
    </section>
  );
}

export default Header;
