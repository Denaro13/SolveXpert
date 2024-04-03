import "katex/dist/katex.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ErrorPage,
  Layout,
  Landing,
  Task,
  QuestionSolution,
  Learning,
  Solution,
  ApprovedSolution,
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
          path: "/solution",
          element: <Solution />,
        },
        {
          path: "/solution/:id",
          element: <ApprovedSolution />,
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
    <main className="bg-slate-200 min-h-screen">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
