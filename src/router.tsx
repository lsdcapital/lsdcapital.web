import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary";
import { NotFound } from "~/components/NotFound";

export function getRouter() {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
  });
}
