export default function Footer() {
  return (
    <footer className="h-16">
      <div className="container flex size-full max-w-[700px] items-center justify-center">
        <small className="text-muted-foreground/80 block text-xs tracking-wide">
          &copy; {new Date().getFullYear()} Anmoldeep Singh. All rights
          reserved.
        </small>
      </div>
    </footer>
  );
}
