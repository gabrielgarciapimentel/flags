import { createBrowserRouter, redirect } from "react-router-dom";
import { Home } from "../pages/Home";
import { Header } from "../components/Header";
import { State } from "../pages/State";
import styles from "../main.module.scss";
import { City } from "../pages/City";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/countries"),
  },
  {
    path: "/countries",
    element: (
      <div className={styles.page}>
        <Header />
        <Home />
      </div>
    ),
  },
  {
    path: "countries/state",
    element: (
      <div className={styles.page}>
        <Header />
        <State />
      </div>
    ),
  },
  {
    path: "countries/state/cities",
    element: (
      <div className={styles.page}>
        <Header />
        <City />
      </div>
    ),
  },
]);
