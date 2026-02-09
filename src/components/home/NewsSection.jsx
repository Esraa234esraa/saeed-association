import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: "إطلاق مبادرة 'مستقبل واعد' لتطوير المهارات التقنية",
      date: "15 فبراير 2026",
      desc: "أعلنت الجمعية عن بدء التسجيل في برنامج تدريبي مكثف يستهدف الشباب...",
      image: "/1.webp"
    },
    {
      id: 2,
      title: "توقيع اتفاقية شراكة مع جامعة الملك سعود",
      date: "10 فبراير 2026",
      desc: "تعزيزاً للتعاون الأكاديمي، وقعت الجمعية مذكرة تفاهم تهدف إلى...",
      image: "/2.webp"
    },
    {
      id: 3,
      title: "ختام المؤتمر السنوي للابتكار التعليمي",
      date: "05 فبراير 2026",
      desc: "اختتمت فعاليات المؤتمر الذي شهد حضوراً واسعاً من الخبراء والمختصين...",
      image: "/3.avif"
    },
  ];

  // Animation variants
  const container = {
    hidden: {},
    visible: { 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="news" className="py-24 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[#BB9661] font-bold text-lg mb-2 block">
              المركز الإعلامي
            </span>
            <h2 className="text-4xl font-bold text-[#25343F] font-dubai">
              أحدث الأخبار
            </h2>
          </div>
        
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {news.map((item) => (
            <motion.div key={item.id} variants={fadeInUp}>
              <Card
                className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group bg-white h-full flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#BB9661] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                    <Calendar className="w-3 h-3 ml-1" />
                    {item.date}
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-[#25343F] mb-3 line-clamp-2 group-hover:text-[#BB9661] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                    {item.desc}
                  </p>
                 
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
