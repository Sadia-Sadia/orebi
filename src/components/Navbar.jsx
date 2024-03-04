import React, { useEffect, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import List from "./List";
import ListItem from "./ListItem";
import { RiMenuFoldFill } from "react-icons/ri";
const Navbar = () => {
  let [navItemShow, setNavItemShow] = useState(true);
  let handleClick = () => {
    setNavItemShow(!navItemShow)
  };
  useEffect(()=>{
    function navShow(){
       if(window.innerWidth<1024){
        setNavItemShow(false)
       }else{
        setNavItemShow(true)
       }
    }

    navShow()
    // window.body.addEventListener("resize",navShow)
  },[])
  return (
    <>
      <nav className="py-[32px] bg-white relative">
        <Container>
          <Flex className=" justify-between">
            <Image src="logo.png" alt="logo" />
            <RiMenuFoldFill onClick={handleClick} className="lg:hidden absolute top-6 right-2"/>
            {navItemShow && 
            <List className=" gap-10 lg:flex absolute top-14 p-4 lg:static bg-white">
              <ListItem className=" font-dm font-normal text-sm text-secondary hover:text-primary hover:font-bold transition duration-150 ease-out">
                Home
              </ListItem>
              <ListItem className=" font-dm font-normal text-sm text-secondary hover:text-primary hover:font-bold transition duration-150 ease-out">
                Shop
              </ListItem>
              <ListItem className=" font-dm font-normal text-sm text-secondary hover:text-primary hover:font-bold transition duration-150 ease-out">
                About
              </ListItem>
              <ListItem className=" font-dm font-normal text-sm text-secondary hover:text-primary hover:font-bold transition duration-150 ease-out">
                Contact
              </ListItem>
              <ListItem className=" font-dm font-normal text-sm text-secondary hover:text-primary hover:font-bold transition duration-150 ease-out">
                Journal
              </ListItem>
            </List>
            }
          </Flex>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
