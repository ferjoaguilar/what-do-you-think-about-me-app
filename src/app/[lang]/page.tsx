import { Form } from "../components/Form/Form";
import { getDictionary } from "./dictionaries";

export default async function Home({params}: {params:Promise<{lang: 'es-ES' | 'en-US'}>}) {
  const {lang} = await params
  const dict = await getDictionary(lang)
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white shadow-md p-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-gray-900">
            {dict.HomePage.title}
          </h1>
          <p className="mt-2 text-gray-700">
            {dict.HomePage.description}
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py8">
        <Form 
          formTitle={dict.Form.formTitle} 
          nameLabel={dict.Form.nameLabel}
          namePlaceholder={dict.Form.namePlaceholder}
        />
      </main>
    </section>
  );
}
