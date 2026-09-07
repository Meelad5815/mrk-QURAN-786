import Link from 'next/link';
import { DailyAyahCard } from '@/components/daily-ayah-card';
import { SearchBar } from '@/components/search-bar';
import { surahList } from '@/lib/quran-data';

const features = [
  { title: 'Read Quran', description: 'Read the Holy Quran with Arabic text and translations.', href: '/quran/1', icon: '📖' },
  { title: 'Listen to Quran', description: 'Enjoy peaceful Quran recitation with auto-advance audio.', href: '/quran/1', icon: '🎧' },
  { title: 'Tafsir', description: 'Explore Quran explanation and deeper understanding.', href: '/quran/1', icon: '📚' },
  { title: 'Bookmarks & Notes', description: 'Save important Ayahs and keep your personal notes.', href: '/bookmarks', icon: '🔖' },
];

export default function HomePage() {
  const popularSurahs = surahList.slice(0, 12);

  return (
    <main className="space-y-8 pb-10">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-800 px-6 py-12 text-white shadow-xl sm:px-10 lg:px-14 lg:py-16">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-teal-300/10 blur-3xl" />
        <div className="relative max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
          <h1 className="font-arabic text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">The Holy Quran</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-emerald-50/90 sm:text-lg">
            Read, listen, search and understand the Quran with translations, Tafsir, bookmarks and personal reading progress — all in one peaceful place.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/quran/1" className="rounded-xl bg-white px-5 py-3 font-semibold text-emerald-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50">
              Start Reading →
            </Link>
            <Link href="/quran/1" className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-semibold backdrop-blur transition hover:bg-white/15">
              Explore Quran
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Search the Quran</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Search Arabic, English, Urdu, Surah names or Ayah references.</p>
        </div>
        <SearchBar />
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">Explore</p>
            <h2 className="mt-1 text-2xl font-bold">Everything you need</h2>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.href} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-2xl dark:bg-emerald-950/50">{feature.icon}</div>
              <h3 className="font-semibold group-hover:text-emerald-700 dark:group-hover:text-emerald-400">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <DailyAyahCard />

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">114 Surahs</p>
            <h2 className="mt-1 text-2xl font-bold">Surah Navigator</h2>
          </div>
          <span className="hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300 sm:inline-flex">Complete Quran</span>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {popularSurahs.map((surah) => (
            <li key={surah.id}>
              <Link href={`/quran/${surah.id}`} className="flex items-center gap-4 rounded-xl border border-slate-100 p-4 transition hover:border-emerald-200 hover:bg-emerald-50/60 dark:border-slate-700 dark:hover:border-emerald-800 dark:hover:bg-emerald-950/20">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-600 dark:bg-slate-700 dark:text-slate-300">{surah.id}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-medium">{surah.nameEnglish}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Surah {surah.id}</span>
                </span>
                <span className="font-arabic text-xl">{surah.nameArabic}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-5 text-center">
          <Link href="/quran/1" className="text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-400">View all Surahs →</Link>
        </div>
      </section>

      <section className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 text-center dark:border-emerald-900/50 dark:bg-emerald-950/20 sm:p-8">
        <p className="font-arabic text-2xl leading-loose">وَقُل رَّبِّ زِدْنِي عِلْمًا</p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">“And say: My Lord, increase me in knowledge.”</p>
      </section>
    </main>
  );
}
