function Skills() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-2">
        Технічні навички
      </h2>

      <ul className="space-y-3">
        <li className="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
          <strong className="text-blue-600 font-semibold block mb-1">
            Програмування:
          </strong>
          <span className="text-slate-700">
            C, C++, Python, базові знання JavaScript.
          </span>
        </li>

        <li className="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
          <strong className="text-blue-600 font-semibold block mb-1">
            Embedded:
          </strong>
          <span className="text-slate-700">
            Arduino, AVR, GPIO, робота з регістрами DDR, PORT, PIN, основи
            роботи з мікроконтролерами.
          </span>
        </li>

        <li className="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
          <strong className="text-blue-600 font-semibold block mb-1">
            Проєктування:
          </strong>
          <span className="text-slate-700">
            робота з електронними схемами, кнопками, світлодіодами,
            OLED-дисплеями, сервоприводами та EEPROM.
          </span>
        </li>

        <li className="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
          <strong className="text-blue-600 font-semibold block mb-1">
            Python:
          </strong>
          <span className="text-slate-700">
            створення CLI-утиліт, робота з файлами, базова автоматизація,
            OpenCV та MediaPipe.
          </span>
        </li>

        <li className="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
          <strong className="text-blue-600 font-semibold block mb-1">
            Мережі:
          </strong>
          <span className="text-slate-700">
            TCP/IP, базові мережеві протоколи, IP-адресація, OSI Model,
            робота з Cisco Packet Tracer.
          </span>
        </li>

        <li className="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
          <strong className="text-blue-600 font-semibold block mb-1">
            Кібербезпека:
          </strong>
          <span className="text-slate-700">
            основи контролю доступу (RBAC), шифрування, аналіз паролів та
            базові принципи захисту інформації.
          </span>
        </li>

        <li className="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
          <strong className="text-blue-600 font-semibold block mb-1">
            Інструменти:
          </strong>
          <span className="text-slate-700">
            Linux (Ubuntu), Git, GitHub, VS Code, Arduino IDE, PlatformIO.
          </span>
        </li>

        <li className="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
          <strong className="text-blue-600 font-semibold block mb-1">
            Мікроконтролери:
          </strong>
          <span className="text-slate-700">
            базове розуміння архітектури AVR та принципів роботи з
            апаратними ресурсами мікроконтролера.
          </span>
        </li>
      </ul>
    </section>
  );
}

export default Skills;