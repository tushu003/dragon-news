import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";
import Navbar from "../Components/Navbar/Navbar";
import LeftAside from "../Components/homeLayout/LeftAside";
import RightAside from "../Components/homeLayout/RightAside";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
        <section>
          <Navbar></Navbar>
        </section>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12"> 
        <aside className="col-span-3"><LeftAside></LeftAside></aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3"> 
            <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
<header></header>;
