import React, {useContext} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { QuoteContext } from "../contexts/quote.context";

export default function Menu() {

  const {favorite} = useContext(QuoteContext);
  
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/counter">
            Counter
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/cities" aria-current="page">
            Cities
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/quotes">
            Quotes({favorite})
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
