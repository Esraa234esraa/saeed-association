import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      dir="rtl"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1590485050993-f7a29577cad4)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#25343F] via-[#25343F]/80 to-[#25343F]/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Logo Placeholder */}

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-dubai leading-tight">
            جمعية سعيد العلمية
          </h1>

          <p className="text-xl md:text-3xl text-gray-200 mb-10 font-dubai max-w-3xl leading-relaxed">
            تعزيز التعليم المستدام وبناء مجتمع واعٍ قائم على المعرفة
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* زر تواصل معنا */}
            <a href="#contact">
              <Button
                size="lg"
                className="bg-[#BB9661] hover:bg-[#a38253] text-[#25343F] font-bold px-10 py-6 text-xl rounded-full flex items-center"
              >
                تواصل معنا
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </a>

            {/* زر تعرف علينا أكثر */}
            <a href="#about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-[#25343F] hover:bg-white hover:text-[#25343F] font-bold px-10 py-6 text-xl rounded-full"
              >
                تعرف علينا أكثر
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
