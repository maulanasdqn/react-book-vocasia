import { createBrowserRouter } from "react-router-dom";
import { lazily } from "react-lazily";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components";

const { HomePage, UpdateBookPage, CreateBookPage } = lazily(() =>
  import("@/pages"),
);

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/create",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <CreateBookPage />
      </Suspense>
    ),
  },
  {
    path: "/update/:id",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <UpdateBookPage />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <HomePage />,
  },
]);
