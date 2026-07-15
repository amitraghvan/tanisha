import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-radial-hero flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-3 font-display text-6xl font-semibold text-gradient-forest">
          Page not found
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="min-h-screen bg-radial-hero flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tanisha Rajan — Educator & Pedagogy Specialist Portfolio" },
      {
        name: "description",
        content:
          "Personal portfolio of Tanisha Rajan, Mathematics & Science Educator. Physics graduate and B.Ed. Candidate specializing in visual pedagogy & instructional design.",
      },
      { name: "author", content: "Tanisha Rajan" },
      { name: "theme-color", content: "#14532D" },
      { property: "og:site_name", content: "Tanisha Rajan Portfolio" },
      { property: "og:title", content: "Tanisha Rajan — Educator & Pedagogy Specialist Portfolio" },
      {
        property: "og:description",
        content:
          "Personal portfolio of Tanisha Rajan, Mathematics & Science Educator. Physics graduate and B.Ed. Candidate specializing in visual pedagogy & instructional design.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Tanisha Rajan — Educator & Pedagogy Specialist Portfolio",
      },
      {
        name: "twitter:description",
        content:
          "Personal portfolio of Tanisha Rajan, Mathematics & Science Educator. Physics graduate and B.Ed. Candidate specializing in visual pedagogy & instructional design.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4938008c-7ec0-4c24-8ba0-f6441299c8e0/id-preview-07243335--37ab8968-7953-4076-bcea-6691908671ac.lovable.app-1782965908864.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4938008c-7ec0-4c24-8ba0-f6441299c8e0/id-preview-07243335--37ab8968-7953-4076-bcea-6691908671ac.lovable.app-1782965908864.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
