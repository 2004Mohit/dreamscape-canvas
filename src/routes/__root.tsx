import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import appCss from "@/styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "DREAM KCREATION | Interior Design, Turnkey Execution & Furniture",
      },
      {
        name: "description",
        content:
          "Dream Kcreation is a family-run interior design studio from Jodhpur, Rajasthan offering interior design, turnkey execution, custom furniture, furniture manufacturing and interior material solutions.",
      },
      {
        name: "theme-color",
        content: "#151515",
      },
    ],

    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />

        <Outlet />

        <Footer />

        <Scripts />
      </body>
    </html>
  );
}
