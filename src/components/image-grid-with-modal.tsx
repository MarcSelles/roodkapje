"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

type ImageProps = {
  src: string;
  alt?: string;
  mobileSkip?: boolean;
  mobileOnly?: boolean;
  imageOverlayText?: string;
};

export function ImageGridWithModal({
  imagesRow1,
  imagesRow2,
  imagesRow3,
}: Readonly<{
  imagesRow1: ImageProps[];
  imagesRow2: ImageProps[];
  imagesRow3: ImageProps[];
}>) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:flex gap-3 sm:px-6 lg:px-8 py-8">
      {[imagesRow1, imagesRow2, imagesRow3].map((imageRow) => (
        <div className="w-full sm:w-1/3" key={uuidv4()}>
          {imageRow.map((image, index) => (
            <Dialog key={uuidv4()}>
              <DialogTrigger
                asChild
                className={cn(
                  image.mobileOnly && "sm:hidden",
                  image.mobileSkip && "hidden sm:block"
                )}
              >
                <div className={cn(`relative cursor-pointer mb-3`)}>
                  <Image
                    unoptimized
                    src={image.src}
                    alt={image.alt ?? ""}
                    width={index % 3 === 1 ? 400 : 600}
                    height={index % 3 === 1 ? 600 : 400}
                    className="rounded-lg object-cover hover:opacity-100 opacity-75 w-full max-h-[400px] sm:max-h-none"
                  />
                  {image.imageOverlayText && (
                    <div className="absolute top-[10%] text-black left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl w-full text-center">
                      {image.imageOverlayText}
                    </div>
                  )}
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh] border-none w-full h-full p-0">
                <div className="relative max-h-[90vh]">
                  <Image
                    unoptimized
                    src={image.src}
                    alt={image.alt ?? ""}
                    width={index % 3 === 1 ? 400 : 600}
                    height={index % 3 === 1 ? 600 : 400}
                    className="object-contain max-h-full !w-full !h-full"
                  />
                  <button className="absolute top-2 right-2 p-1 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-opacity">
                    <X size={24} />
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      ))}
    </div>
  );
}
