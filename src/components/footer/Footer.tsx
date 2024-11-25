export default function Footer() {
  return (
    <footer className="py-8 border-t border-blue-800">
      <div className="container mx-auto px-4 text-center text-gray-300">
        <p>
          &copy; {new Date().getFullYear()} Dot Dager. Todos los derechos
          reservados🥒
        </p>
      </div>
    </footer>
  );
}
