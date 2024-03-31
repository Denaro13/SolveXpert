import "katex/dist/katex.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ErrorPage,
  Layout,
  Landing,
  Task,
  QuestionSolution,
  Learning,
} from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "/about",
          element: <div>About Page</div>,
        },
        {
          path: "/solve",
          element: <Task />,
        },
        {
          path: "/solve/:id",
          element: <QuestionSolution />,
        },
        {
          path: "/learning",
          element: <Learning />,
          children: [
            {
              path: "/learning:topic",
              element: (
                <div className="w-[98%] mx-auto bg-red-400 mt-10">
                  About Page
                </div>
              ),
            },
          ],
        },
      ],
    },
  ]);
  return (
    <main className="bg-slate-100 h-screen">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
