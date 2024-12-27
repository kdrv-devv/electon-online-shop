import React from "react";
// import react icons
import { GrLocation } from "react-icons/gr";
import { TbTruck } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { Badge } from "antd";
import "./header.scss";
import headerLogo from "./imges/header-logo.png";
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <section className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-left">
            <a href="tel:998979661575">
              Need help? Call us: (+98) 0234 456 789
            </a>
          </div>
          <div className="header-right">
            <button>
              <GrLocation style={{ fontSize: 27 }} />
              <span>Our store </span>
            </button>

            <button>
              <TbTruck style={{ fontSize: 27 }} />
              <span>Track your order</span>
            </button>
          </div>
        </div>
      </div>
          
      <div className="header-center">
        <div className="container">
          <div className="header-center-left">
            <Link>
              {" "}
              <img src={headerLogo} alt="img" />{" "}
            </Link>
            <form action="">
              <input type="text" placeholder="Serach any things" />
              <button>Search</button>
            </form>
          </div>
          <div className="header-center-right">
            <button>
              <FaRegUser style={{ fontSize: 22 }} />
              <span>Sign in</span>
            </button>
            <button>
              <Badge count={0} showZero>
                <GoHeart className="liked" style={{ fontSize: 22 }} />
              </Badge>
              <span>Liked</span>
            </button>

            <button>
              <BsCart3 style={{ fontSize: 22 }} />
              <span>Cart</span>
            </button>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="header-bottom-left">
            <button>
              Browse categories <IoIosArrowDown />
            </button>

            <div className="header-links">
              <a href="">
                Home <IoIosArrowDown />
              </a>
              <a href="">
                Catalog <IoIosArrowDown />
              </a>
              <a href="">
                Blog <IoIosArrowDown />
              </a>
              <a href="">
                Pages <IoIosArrowDown />
              </a>
              <a href="">
                About us <IoIosArrowDown />
              </a>
            </div>
          </div>
          <div className="header-bottom-right">
            <a href="">30 Days Free Return</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
