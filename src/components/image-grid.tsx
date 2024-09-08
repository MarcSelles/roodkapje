import Image from "next/image";

export function ImageGrid({
  images,
}: Readonly<{
  images: { src: string; alt?: string }[];
}>) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={crypto.randomUUID()}
            className={`relative ${index % 3 === 1 ? "row-span-2" : ""}`}
          >
            <Image
              src={image.src}
              alt={image.alt ?? "'"}
              layout="responsive"
              width={index % 3 === 1 ? 400 : 600}
              height={index % 3 === 1 ? 600 : 400}
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
