export default function Footer() {
    return (
        <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center">
            <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} Santiago Cabrerizo.
            </p>
        </footer>
    );
}