import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between pl-20 pr-20 mt-10">
      <div className="">
        <Link href={"/"}>
          <div className="flex items-center gap-2 p-4 cursor-pointer">
            <Image
              src="/field-log-icons/field-log-icon-32.png"
              alt="FieldLog Logo"
              width={30}
              height={30}
            />
            FieldLog
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <Link href={"/account"}>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faCircleUser}
              style={{ color: "rgb(20, 88, 223)" }}
            />
            Account
          </div>
        </Link>
        <Link href={"/about"}>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faCircleInfo}
              style={{ color: "rgb(20, 88, 223)" }}
            />
            About
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
