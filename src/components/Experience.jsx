function Experience() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-blue-500 pb-2">
        Досвід роботи / Проєкти
      </h2>

      <div className="space-y-6">
        <article className="p-4 rounded-lg bg-slate-50 border-l-4 border-blue-500 hover:bg-slate-100 transition-colors">
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            Embedded / Arduino — Electronic Lock
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            Розробка електронного замка на Arduino Uno з використанням C/C++.
            Реалізовано введення PIN-коду, керування сервоприводом, OLED-дисплеєм,
            кнопками та світлодіодами. Для зберігання PIN-коду використано EEPROM.
            Робота з GPIO та AVR-регістрами на низькому рівні.
          </p>
        </article>

        <article className="p-4 rounded-lg bg-slate-50 border-l-4 border-blue-500 hover:bg-slate-100 transition-colors">
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            Вивчення C та Embedded Programming
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            Вивчення мови C: змінні, умови, цикли, функції, масиви, вказівники,
            структури та робота з пам'яттю. Практика роботи з AVR-регістрами
            DDR, PORT та PIN, а також основи роботи з мікроконтролерами.
          </p>
        </article>

        <article className="p-4 rounded-lg bg-slate-50 border-l-4 border-blue-500 hover:bg-slate-100 transition-colors">
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            Python — навчальні проєкти
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            Практика Python у межах навчальних проєктів з кібербезпеки:
            CLI-утиліти, аналізатори надійності паролів, системи розмежування
            доступу (RBAC), алгоритми шифрування та робота з OpenCV і MediaPipe.
          </p>
        </article>

        <article className="p-4 rounded-lg bg-slate-50 border-l-4 border-blue-500 hover:bg-slate-100 transition-colors">
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            Мережі та кібербезпека
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            Практика проєктування мережевих топологій у Cisco Packet Tracer,
            робота з комутаторами та маршрутизаторами, налаштування мережевої
            взаємодії та вивчення основ мережевої безпеки.
          </p>
        </article>

        <article className="p-4 rounded-lg bg-slate-50 border-l-4 border-blue-500 hover:bg-slate-100 transition-colors">
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            Інструменти розробки
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            Робота з Git та GitHub, PlatformIO, Arduino IDE, VS Code та Linux.
            Створення та ведення власних проєктів, компіляція, налагодження
            та організація структури програм.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Experience;