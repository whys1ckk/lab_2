function Header() {
  return (
    <header className="flex flex-col items-center bg-slate-900 text-white p-8 shadow-md rounded-b-xl">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 hover:scale-105 transition-transform cursor-pointer">
        Максим Лопачак Ігорович
      </h1>
      <p className="text-lg text-blue-400 font-medium mb-3">
        Embedded Developer / Студент кібербезпеки
      </p>
      <p className="text-sm text-slate-300 flex flex-wrap justify-center gap-2">
        <span>
          Email:{" "}
          <a
            href="mailto:nezox147@gmail.com"
            className="text-blue-300 hover:text-white underline transition-colors"
          >
            nezox147@gmail.com
          </a>
        </span>
        <span className="hidden sm:inline">|</span>
        <span>
          GitHub:{" "}
          <a
            href="https://github.com/whys1ckk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-white underline transition-colors"
          >
            github.com/whys1ckk
          </a>
        </span>
      </p>
    </header>
  );
}

export default Header;