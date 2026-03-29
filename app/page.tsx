import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  SoftServiceIcon,
  type SoftServiceKind,
} from "@/components/soft-icons";

const CONTACT = {
  name: "Иван Кошарный",
  email: "ivancosharnii@gmail.com",
  telegramUrl: "https://t.me/vancukosha",
  telegramHandle: "@vancukosha",
  phone: "078509627",
  phoneDisplay: "078 509 627",
} as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="container mx-auto bg-gradient-to-b from-primary/[0.09] via-transparent to-transparent px-4 pb-20 pt-10 text-center md:pb-28 md:pt-14">
          <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent/90 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-md backdrop-blur-sm">
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary/35 to-primary/15 text-[11px] font-bold text-primary-foreground shadow-sm ring-1 ring-primary/25"
              aria-hidden
            >
              ИК
            </span>
            {CONTACT.name} · доступен к проектам · удалённо / СНГ
          </p>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Бизнес-аналитик, который связывает данные, людей и стратегию
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Превращаю разрозненные цифры и интервью в ясные гипотезы, требования и отчёты:
            меньше согласований «вслепую», больше решений, которые можно защитить перед
            руководством и инженерами.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <Link href="#contact">Обсудить задачу</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="#cases">Смотреть кейсы</Link>
            </Button>
          </div>
        </section>

        <section id="about" className="container mx-auto px-4 py-16 scroll-mt-24">
          <h2 className="mb-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Обо мне
          </h2>
          <p className="mb-8 max-w-2xl text-sm text-muted-foreground">
            Коротко о подходе: сначала выясняю,{" "}
            <strong className="font-medium text-foreground">
              какое решение должно измениться в реальности
            </strong>
            , и только потом подбираю артефакты — от swimlane до дашборда.
          </p>
          <div className="max-w-3xl space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              Меня зовут{" "}
              <span className="font-medium text-foreground">{CONTACT.name}</span> — я
              бизнес-аналитик с упором на продуктовые и операционные команды. Пять с лишним
              лет помогаю компаниям внедрять изменения без хаоса: фиксирую контекст,
              снимаю противоречия между бизнесом и ИТ и довожу инициативу до измеримого
              результата.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Работал с финтехом, маркетплейсами и корпоративной логистикой: от быстрых
              спринтов с прототипом отчёта до дорожных карт на квартал. Обычно я —
              «переводчик» между владельцами процесса, разработкой и финансами: делаю так,
              чтобы встречи заканчивались списком решений, а не новым раундом уточнений.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Вне проектов веду заметки о метриках и когнитивных искажениях в аналитике —
              это помогает клиентам реже принимать решения «на картинку, которая просто
              красиво легла в слайд».
            </p>
            <div className="mt-8 flex flex-wrap gap-4 border-t border-border pt-8 sm:gap-8">
              {(
                [
                  { n: "5+", sub: "лет в аналитике" },
                  { n: "30+", sub: "инициатив" },
                  { n: "15+", sub: "команд и компаний" },
                ] as const
              ).map((s) => (
                <div key={s.sub} className="flex items-center gap-3">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 text-sm font-bold text-primary shadow-inner ring-1 ring-primary/20"
                    aria-hidden
                  >
                    {s.n}
                  </span>
                  <div>
                    <p className="text-2xl font-semibold text-foreground">{s.n}</p>
                    <p className="text-sm text-muted-foreground">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="scroll-mt-24 border-y border-border/60 bg-muted/30 py-16"
        >
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Услуги
            </h2>
            <p className="mb-10 max-w-2xl text-muted-foreground">
              Можно подключить точечно или вести весь цикл — от интервью до приёмки
              результата в проде.
            </p>
            <ul className="grid gap-6 md:grid-cols-2">
              {(
                [
                  {
                    kind: "analytics" as SoftServiceKind,
                    title: "Диагностика и аналитика",
                    text: "Разбор текущего состояния: метрики, узкие места, дублирование отчётности. Выход — карта проблем, гипотезы и план экспериментов.",
                  },
                  {
                    kind: "doc" as SoftServiceKind,
                    title: "Требования и спецификации",
                    text: "User stories, use cases, брифы на интеграции, критерии приёмки. Пишу так, чтобы разработка и тестирование тратили меньше времени на угадайку.",
                  },
                  {
                    kind: "process" as SoftServiceKind,
                    title: "Процессы и согласования",
                    text: "Модели AS-IS / TO-BE, роли, регламенты, контрольные точки. Снижаю «шум» в переписке и количество кругов согласования.",
                  },
                  {
                    kind: "dashboard" as SoftServiceKind,
                    title: "Дашборды и истории с данными",
                    text: "От логики метрик до макетов в BI: что смотрит операционка, что — руководство. Помогаю не перегрузить экран цифрами «для галочки».",
                  },
                ] as const
              ).map((s) => (
                <li
                  key={s.title}
                  className="flex gap-4 rounded-2xl border border-border/90 bg-background/90 p-5 shadow-md ring-1 ring-primary/[0.07] sm:gap-5 sm:p-6"
                >
                  <SoftServiceIcon kind={s.kind} className="max-sm:mt-0.5" />
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="cases" className="container mx-auto scroll-mt-24 px-4 py-16">
          <h2 className="mb-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Кейсы
          </h2>
          <p className="mb-10 max-w-2xl text-muted-foreground">
            Обезличенные примеры — акцент на задаче, подходе и эффекте, без NDA-деталей.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                tag: "Логистика",
                title: "Три контура согласования → один поток",
                body: "Собрал единую схему статусов и SLA, убрал параллельные чаты. Срок цикла сократился примерно на четверть, а аудиторы впервые увидели полную трассировку.",
                kpi: "−27% времени цикла",
              },
              {
                tag: "Финтех",
                title: "Единая витрина KPI для филиалов",
                body: "Согласовал словарь показателей с финансами и операционкой, описал правила расчёта и владельцев данных. Руководители перестали сравнивать «разные версии правды».",
                kpi: "1 источник для 12 филиалов",
              },
              {
                tag: "E‑commerce",
                title: "Отчётность при смене DWH",
                body: "Карта отчётов, приоритет миграции, паритет цифр между старой и новой витриной. Запуск без «нуля» в ключевых метриках в первую неделю.",
                kpi: "0 критичных расхождений на go-live",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="flex flex-col rounded-2xl border border-border/90 bg-background/95 p-6 shadow-md ring-1 ring-primary/[0.06]"
              >
                <span className="mb-3 inline-block w-fit rounded-md bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                  {c.tag}
                </span>
                <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
                <p className="mt-4 text-sm font-medium text-primary">{c.kpi}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="scroll-mt-24 border-t border-border/60 bg-muted/30 py-16"
        >
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Навыки и стек
            </h2>
            <p className="mb-10 max-w-2xl text-muted-foreground">
              Технологии — инструмент; главное умение — задавать вопросы так, чтобы ответы
              можно было проверить данными.
            </p>
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Инструменты
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {[
                    "SQL",
                    "Python",
                    "Power BI / Superset",
                    "Jira / YouTrack",
                    "Miro",
                    "Notion / Confluence",
                    "Excel / Sheets",
                  ].map((x) => (
                    <li
                      key={x}
                      className="rounded-lg border border-border bg-background px-2.5 py-1 text-sm"
                    >
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Методологии
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {[
                    "BABOK",
                    "User Story Mapping",
                    "CJM",
                    "KPI / OKR",
                    "Lean процессы",
                    "Прототипирование отчётов",
                  ].map((x) => (
                    <li
                      key={x}
                      className="rounded-lg border border-border bg-background px-2.5 py-1 text-sm"
                    >
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Домены
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {[
                    "Финтех",
                    "Ритейл и логистика",
                    "B2B сервисы",
                    "Внутренние платформы",
                  ].map((x) => (
                    <li
                      key={x}
                      className="rounded-lg border border-border bg-background px-2.5 py-1 text-sm"
                    >
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="container mx-auto scroll-mt-24 px-4 py-16">
          <h2 className="mb-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Контакты
          </h2>
          <p className="mb-8 max-w-2xl text-muted-foreground">
            Расскажите, что болит: отчёт, процесс, новая фича или «нам нужен человек, кто
            всё структурирует». Отвечу с вариантами формата работы и ориентировочными
            сроками.
          </p>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Почта</p>
                <a
                  className="text-lg font-medium text-primary underline-offset-4 hover:underline"
                  href={`mailto:${CONTACT.email}`}
                >
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Телефон</p>
                <a
                  className="text-lg font-medium text-primary underline-offset-4 hover:underline"
                  href={`tel:${CONTACT.phone}`}
                >
                  {CONTACT.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Telegram</p>
                <a
                  className="text-lg font-medium text-primary underline-offset-4 hover:underline"
                  href={CONTACT.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT.telegramHandle}
                </a>
                <p className="mt-1 text-sm text-muted-foreground">
                  Пишите в Telegram — отвечу в течение дня, если нет плановых релизов.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Формат</p>
                <p className="text-muted-foreground">
                  Проект целиком, аудит с дорожной картой или сопровождение команды на 1–2
                  месяца.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-border/90 bg-muted/25 p-6 shadow-md ring-1 ring-primary/[0.06]">
              <p className="text-sm font-semibold text-foreground">
                Что прислать в первом сообщении
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>Компания / отрасль и кратко о продукте</li>
                <li>Что уже пробовали и где застряли</li>
                <li>Желаемый дедлайн или окно для старта</li>
              </ul>
              <div className="mt-6">
                <Button asChild className="w-full sm:w-auto">
                  <Link
                    href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Запрос с портфолио")}`}
                  >
                    Написать письмо
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
