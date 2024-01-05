"use client"

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { List } from "./list";

export const MenuMobile = () => {
    const [open, setOpen] =useState(false)
    return(
        <div onClick={()=>setOpen(!open)} className="sm:hidden bg-gray-200" >
            {open?<List/>:<FiMenu size={"1.75rem"}/>}
        </div>
    )
}