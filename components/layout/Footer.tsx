export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto max-w-[700px] py-6 text-center">
        <small className="text-muted-foreground/80 block text-xs tracking-wide">
          &copy; {new Date().getFullYear()} Anmoldeep Singh. All rights
          reserved.
        </small>
      </div>
    </footer>
  );
}
