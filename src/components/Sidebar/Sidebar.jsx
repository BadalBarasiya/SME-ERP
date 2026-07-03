import { useEffect, useRef, useState } from "react";
import "./Sidebar.css";

import {
  LuLayoutDashboard,
  LuUser,
  LuReceipt,
  LuShoppingCart,
  LuBriefcase,
  LuBadgePlus,
  LuSettings2,
  LuPackage,
  LuTag,
  LuShoppingBag,
  LuChevronRight,
} from "react-icons/lu";

import logo from "../../assets/ISHITA LOGO BG REMOVE 1.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openMenu, setOpenMenu] = useState(null);
  const popupRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      icon: <LuLayoutDashboard />,
      title: "Dashboard",
      path: "/",
    },
    {
      icon: <LuUser />,
      title: "Masters",
      path: "/party-master",
      submenu: [
        {
          icon: <LuUser />,
          title: "Party Master",
          path: "/party-master",
        },
        {
          icon: <LuTag />,
          title: "Category Master",
          path: "/category-master",
        },
        {
          icon: <LuPackage />,
          title: "Item Master",
          path: "/item-master",
        },
        {
          icon: <LuShoppingBag />,
          title: "Inventory Master",
          path: "/inventory-master",
        },
      ],
    },
    {
      icon: <LuReceipt />,
      title: "Invoices",
    },
    {
      icon: <LuShoppingCart />,
      title: "In House Plating",
    },
    {
      icon: <LuBriefcase />,
      title: "Packing List",
    },
    {
      icon: <LuBadgePlus />,
      title: "Plating Job Work",
    },
    {
      icon: <LuSettings2 />,
      title: "Shreya",
    },
    {
      icon: <LuPackage />,
      title: "Other Job Work",
    },
    {
      icon: <LuTag />,
      title: "Purchase",
    },
    {
      icon: <LuShoppingBag />,
      title: "Selling",
    },
  ];

  const handleClick = (index, item) => {
    setActiveIndex(index);

    if (item.submenu) {
      navigate(item.path || item.submenu[0]?.path || "/");
      setOpenMenu(openMenu === index ? null : index);
    } else {
      setOpenMenu(null);
      navigate(item.path || "/");
    }
  };

  return (
    <div className="sidebar" ref={popupRef}>
      <div className="sidebar-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="sidebar-menu">
        {menuItems.map((item, index) => (
          <div className="menu-wrapper" key={index}>
            <div
              className={`menu-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleClick(index, item)}
            >
              <div className="left">
                <span className="icon">{item.icon}</span>
                <span>{item.title}</span>
              </div>

              {item.submenu && (
                <span className={`arrow ${openMenu === index ? "arrow-open" : ""}`}>
                  <LuChevronRight />
                </span>
              )}
            </div>

            {openMenu === index && item.submenu && (
              <div className="submenu-popup" ref={popupRef}>
                {item.submenu.map((subItem, i) => (
                  <div
                    className="submenu-item"
                    key={i}
                    onClick={() => subItem.path && navigate(subItem.path)}
                  >
                    <span className="icon">{subItem.icon}</span>
                    <span>{subItem.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <div className="admin">
          <div className="admin-icon">
            <LuUser />
          </div>

          <span>Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
