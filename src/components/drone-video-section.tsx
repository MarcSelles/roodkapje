import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DroneVideoSection() {
  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="absolute -top-14" id="drone" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-2">
              Ontdek onze bungalow vanuit de lucht
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-w-16 aspect-h-9">
              <video
                src="/drone.mp4"
                className="w-full h-full rounded-lg"
                controls
              />
            </div>
            <p className="mt-4 text-center text-gray-600">
              Bekijk onze prachtige bungalow en de omgeving vanuit
              vogelperspectief
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
