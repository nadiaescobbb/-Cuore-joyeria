import { createFileRoute } from "@tanstack/react-router";
import Cuore from "../pages/Cuore";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Cuore — Joyería y Relojería | 40 años de tradición" },
      {
        name: "description",
        content: "Cuore: 40 años custodiando lo que permanece. Tradición joyera, relojería especializada y tecnología láser de precisión.",
      },
    ],
  }),
});

function Index() {
  return <Cuore />;
}
