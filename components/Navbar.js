"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/vecteezy_food-truck-logo-design-icon_7788445.jpg";
import React from "react";
import { Button } from "@mui/material";
import { NotificationAdd, Notifications } from "@mui/icons-material";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full gap-8 mt-4">
      <div>
        <Link href="/">
          <Image src={logo} alt="logo_img" className="logo" />
        </Link>
      </div>
      <div className="flex gap-8 justify-between">
        <button className="button-17">
          <Link href="/">About</Link>
        </button>
        <button className="button-17">
          <Link href="/">Gallery</Link>
        </button>
        <button className="button-17">
          <Link href="/">Locations</Link>
        </button>
      </div>
      <div>
        <Notifications />
      </div>
    </nav>
  );
};

export default Navbar;
