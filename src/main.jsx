import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import { Users } from "./32/users.jsx";
import { Posts } from "./32/posts.jsx";
import { PostDetails } from "./32/post-details.jsx";
import { VoteProvider } from "./34/vote-provider.jsx";

// 1. Var router
// createBrowserRouter - ne permite sa definim un array de rute
// fiecare obiect din array are:
// 1. path = pathname din (window.location) -
// 2. component - componenta react care va fi randata

// if (path === window.location.pathname) {
//     return Component
// }

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/users",
    Component: Users,
  },
  {
    path: "/posts",
    Component: Posts,
  },
  {
    path: "/posts/:postId",
    Component: PostDetails,
  },
]);

// 2. De imapchetat aplicatia si de expus datele
createRoot(document.getElementById("root")).render(
  <VoteProvider>
    <RouterProvider router={router} />,
  </VoteProvider>,
);
