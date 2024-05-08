import "katex/dist/katex.min.css";
import "react-toastify/dist/ReactToastify.css";
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
  SolvingTips,
} from "./pages";
import TopicContent from "./pages/TopicContent";
import { ToastContainer } from "react-toastify";

function App() {
  const user = true;
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
              element: <TopicContent />,
            },
          ],
        },
        {
          path: "/solving-tips",
          element: <SolvingTips />,
        },
      ],
    },
  ]);
  if (!user) {
    return <Landing />;
  }
  return (
    <main className="bg-slate-200 min-h-screen">
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </main>
  );
}

export default App;
