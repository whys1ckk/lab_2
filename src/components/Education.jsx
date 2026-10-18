function Education() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
        Освіта
      </h2>

      <div className="p-4 rounded-lg bg-slate-50 border-l-4 border-blue-500 hover:bg-slate-100 transition-colors">
        <h3 className="text-lg font-bold text-slate-900 mb-1">
          Національний університет «Львівська політехніка»
        </h3>
        <p className="text-blue-600 font-medium text-sm mb-1">
          Бакалавр з кібербезпеки
        </p>
        <p className="text-slate-500 text-xs">
          2025 — дотепер
        </p>
      </div>
    </section>
  );
}

export default Education;