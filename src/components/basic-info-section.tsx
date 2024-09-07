import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Leaf } from "lucide-react";

export function BasicInfoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ontdek Roodkapje Ommen
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Een magische plek waar avontuur en natuur samenkomen in het hart van
            Overijssel
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: MapPin,
              title: "Locatie",
              description: "Gelegen in het prachtige Ommen, Overijssel",
            },
            {
              icon: Clock,
              title: "Openingstijden",
              description: "Dagelijks geopend van 10:00 tot 18:00 uur",
            },
            {
              icon: Users,
              title: "Voor iedereen",
              description: "Activiteiten voor alle leeftijden en groepen",
            },
            {
              icon: Leaf,
              title: "Natuurbeleving",
              description: "Omringd door bossen en natuurgebieden",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-base text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-4">
                Beleef de magie van Roodkapje Ommen
              </h3>
              <p className="text-lg text-gray-500 mb-6">
                Of je nu komt voor een dagje uit met het gezin, een
                schoolreisje, of een bedrijfsuitje, Roodkapje Ommen biedt een
                unieke ervaring voor iedereen. Ontdek onze spannende
                speurtochten, educatieve natuurworkshops, en gezellige
                horecagelegenheden.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg">
                Bekijk onze activiteiten
              </Button>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="relative h-64 sm:h-72 md:h-96 lg:h-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Roodkapje Ommen activiteiten"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
