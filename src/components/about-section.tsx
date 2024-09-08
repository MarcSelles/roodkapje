import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";

export function AboutSection({
  title,
  subtitle,
  info,
  infoAsHtml,
  noBottomMargin,
  id,
  isBgGrey,
}: Readonly<{
  title: string;
  subtitle?: string;
  info?: string;
  infoAsHtml?: string;
  noBottomMargin?: boolean;
  id?: string;
  isBgGrey?: boolean;
}>) {
  return (
    <section
      className={cn(
        noBottomMargin ? "pt-16" : "py-16",
        "relative",
        isBgGrey ? "bg-gray-50" : "bg-white"
      )}
    >
      <div className="absolute -top-14" id={id} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-2">{title}</CardTitle>
            {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
          </CardHeader>
          <CardContent>
            {info && <p className="text-gray-700 leading-relaxed">{info}</p>}
            {infoAsHtml && (
              <div className="text-gray-700  leading-relaxed">
                {parse(infoAsHtml)}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
