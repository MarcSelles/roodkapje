import { AboutSection } from "@/components/about-section";
import { DroneVideoSection } from "@/components/drone-video-section";
import { HeroSection } from "@/components/hero-section";
import { ImageGridWithModal } from "@/components/image-grid-with-modal";
import { ModernMinimalistHeader } from "@/components/modern-minimalist-header";

export default function Home() {
  return (
    <>
      <ModernMinimalistHeader />
      <HeroSection />
      <AboutSection
        id="over"
        title="Over Roodkapje"
        subtitle="Geniet van de rust"
        info="Onze ruime vakantiewoning op Buitenplaats de Hongerige Wolf te
              Stegeren, in het buitengebied van Ommen, wordt gedurende de
              zomermaanden verhuurd aan liefhebbers van het mooie Salland. De
              bungalow is op loopafstand gelegen van en kan worden gereserveerd
              via de naastgelegen camping De Kleine Wolf. De camping
              (www.kleinewolf.nl) heeft vele faciliteiten (oa zwembad,
              visvijver, strand, fietscrossbaan) waar gebruik van gemaakt mag
              worden, alsof je een plekje op de camping hebt. Kortom, het recept
              voor een heerlijke vakantie!"
      />
      <AboutSection
        id="buitenkant"
        title="De groene buitenkant"
        info="De bungalow is omgeven door een ruime tuin en ligt aan de rand van de buitenplaats met vrij uitzicht."
        noBottomMargin
      />
      <ImageGridWithModal
        imagesRow1={[
          { src: "/roodkapje_buiten_2.jpeg", alt: "" },
          { src: "/roodkapje_buiten_3.jpeg", alt: "" },
          { src: "/roodkapje_buiten_6.jpeg", alt: "" },
          { src: "/roodkapje_buiten_9.jpeg", alt: "" },
        ]}
        imagesRow2={[
          { src: "/parallex_2.jpeg", alt: "" },
          { src: "/roodkapje_buiten_1.jpeg", alt: "" },
          { src: "/roodkapje_buiten_4.jpeg", alt: "" },
        ]}
        imagesRow3={[
          { src: "/roodkapje_buiten_5.jpeg", alt: "" },
          { src: "/roodkapje_buiten_8.jpeg", alt: "" },
        ]}
      />
      <DroneVideoSection />
      <AboutSection
        id="inrichting"
        title="De gezellige inrichting"
        info="We hebben de bungalow ingericht zoals wij dat zelf prettig vinden; warm, comfortabel en licht zijn daarbij de toverwoorden geweest.
De recent vernieuwde badkamer met stortdouche bevindt zich op de benedenverdieping."
        noBottomMargin
      />
      <ImageGridWithModal
        imagesRow1={[
          { src: "/roodkapje_binnen_2.jpg", alt: "" },
          { src: "/roodkapje_binnen_3.jpeg", alt: "" },
          { src: "/roodkapje_binnen_8.jpeg", alt: "" },
          { src: "/roodkapje_binnen_12.jpeg", alt: "" },
        ]}
        imagesRow2={[
          { src: "/roodkapje_binnen_5.jpg", alt: "" },
          { src: "/roodkapje_binnen_13.jpeg", alt: "" },
        ]}
        imagesRow3={[
          { src: "/roodkapje_binnen_18.jpg", alt: "" },
          { src: "/roodkapje_binnen_16.jpeg", alt: "" },
        ]}
      />
      <AboutSection
        id="slaapkamers"
        title="Het is hier heerlijk slapen"
        info="De rustige ligging maakt slapen een genot.
Er zijn 4 slaapkamers, twee beneden waarvan slaapkamer 1 met wastafel, en 2 boven waarvan slaapkamer 4 twee losse eenpersoons bedden heeft."
        noBottomMargin
      />
      <ImageGridWithModal
        imagesRow1={[
          {
            src: "/roodkapje_binnen_9.jpeg",
            alt: "",
            imageOverlayText: "Slaapkamer 1",
          },
          {
            src: "/roodkapje_binnen_10.jpg",
            alt: "",
            mobileSkip: true,
            imageOverlayText: "Slaapkamer 3",
          },
        ]}
        imagesRow2={[
          {
            src: "/roodkapje_binnen_6.jpeg",
            alt: "",
            imageOverlayText: "Slaapkamer 1",
          },
        ]}
        imagesRow3={[
          {
            src: "/roodkapje_binnen_17.jpeg",
            alt: "",
            imageOverlayText: "Slaapkamer 2",
          },
          {
            src: "/roodkapje_binnen_10.jpg",
            alt: "",
            mobileOnly: true,
            imageOverlayText: "Slaapkamer 3",
          },
          {
            src: "/roodkapje_binnen_15.jpeg",
            alt: "",
            imageOverlayText: "Slaapkamer 4",
          },
        ]}
      />
      <AboutSection
        id="reserveren"
        isBgGrey
        title="Reserveren"
        subtitle="De bungalow wordt uitsluitend verhuurd tijdens de zomervakantie."
        infoAsHtml={`
        <p className="text-xl mb-4">
          <em>Mail: <a href="mailto:info@kleinewolf.nl"  class="underline">info@kleinewolf.nl</a></em>
        </p>

        <p className="text-xl">
          <em>Telefoon:
            <a href="tel:0031529457203" class="underline">0529 45 72 03</a></em>
        </p>
      `}
      />
    </>
  );
}
