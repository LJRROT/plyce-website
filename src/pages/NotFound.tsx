import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-muted pt-24 section-padding">
      <div className="container-tight flex min-h-[calc(100dvh-6rem)] flex-col items-center justify-center text-center">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">404</h1>
        <p className="mb-6 max-w-md text-lg text-muted-foreground leading-relaxed">
          Diese Seite gibt es nicht oder der Link ist veraltet.
        </p>
        <Link to="/" className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/90">
          Zur Startseite
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
