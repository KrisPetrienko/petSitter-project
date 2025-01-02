import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Header-navigation/MainNavigation.jsx";


export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}