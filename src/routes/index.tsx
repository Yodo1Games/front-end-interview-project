import { Navigate } from "react-router-dom";

import TestPageView from "src/views/testPage";

const routes = [
  {
    path: "/",
    children: [
      // default
      { path: '/', element: <Navigate to="/test-page" /> },
      { path: "/test-page", element: <TestPageView /> },
    ],
  },
];

export default routes;
