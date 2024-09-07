import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-2">
              Over Roodkapje
            </CardTitle>
            <p className="text-xl text-center text-gray-600">
              Geniet van de rust
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Onze ruime vakantiewoning op Buitenplaats de Hongerige Wolf te
              Stegeren, in het buitengebied van Ommen, wordt gedurende de
              zomermaanden verhuurd aan liefhebbers van het mooie Salland. De
              bungalow is op loopafstand gelegen van en kan worden gereserveerd
              via de naastgelegen camping De Kleine Wolf. De camping
              (www.kleinewolf.nl) heeft vele faciliteiten (oa zwembad,
              visvijver, strand, fietscrossbaan) waar gebruik van gemaakt mag
              worden, alsof je een plekje op de camping hebt. Kortom, het recept
              voor een heerlijke vakantie!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
