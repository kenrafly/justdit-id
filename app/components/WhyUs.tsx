import { Homepage, WhyUsFeature } from "@/sanity/queries";
import Image from "next/image";

interface WhyUsProps {
  data?: Homepage | null;
  whyUsFeatures?: WhyUsFeature[];
}

export default function WhyUs({ data, whyUsFeatures }: WhyUsProps) {
  // Default features if CMS data is not available
  const defaultFeatures = [
    {
      icon: "✓",
      title: "Akun Resmi dan Legal",
      description: "Semua akun tanpa crack mod",
      image: "/placeholder1.jpg",
    },
    {
      icon: "💰",
      title: "Dapatkan Harga Murah",
      description: "Harga ekonomis kualitas eksklusif",
      image: "/placeholder2.jpg",
    },
    {
      icon: "🛡️",
      title: "Amanah dan Bergaransi",
      description: "Kenyamanan konsumen paling utama",
      image: "/placeholder3.jpg",
    },
  ];

  const benefits =
    whyUsFeatures && whyUsFeatures.length > 0 ? whyUsFeatures : defaultFeatures;

  return (
    <section className="py-0 sm:py-6 bg-[#041A2F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto scrollbar-hide -mx-4 sm:mx-0">
          <div className="flex gap-3 sm:gap-6 px-4 sm:px-0 pb-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-lg sm:rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl flex-shrink-0 w-[200px] sm:w-[280px] bg-gradient-to-br from-[#041A2F] to-[#28529C]"
              >
                {benefit.image && (
                  <Image
                    src={benefit.image}
                    alt={benefit.title || `Feature ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
