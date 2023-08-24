import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import { MainNavStatic } from "@/components/main-nav-static";
import Logo from "./logo";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        {/* Use flex-col and sm:flex-row to break the elements into multiple row when the screen size is small */}
        {/* Adjust h-auto to dynamically adjust the nav-bar height based on the number of cols required */}
        <div className="relative px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:col-auto h-auto items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            {/* <p className="font-bold text-xl">Home</p> */}
            <Logo />
          </Link>
          <MainNavStatic className="mx-6" />
          <MainNav data={categories}/>
          {/* <NavbarActions /> */}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
