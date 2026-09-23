export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#OEOF11] px-10 py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        <div>
          <p className="text-sm text-white">
            Oliver Wiryateja Herlianto
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/Jamsyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white transition-colors hover:text-blue-500"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/oliver-wiryateja-herlianto-967185326/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white transition-colors hover:text-blue-500"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}