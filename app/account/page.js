import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Account = () => {
  return (
    <div className="mx-auto flex flex-col items-center  gap-4 border p-4 w-100">
      <Link href={"/"}>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ color: "rgb(20, 88, 223)" }}
          />
          Back
        </div>
      </Link>

      <div>Username</div>
      <div>Technician ID</div>
      <div>Logout</div>
    </div>
  );
};

export default Account;
