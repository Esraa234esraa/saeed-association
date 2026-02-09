import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Presentation, Mic2, GraduationCap, HeartHandshake, Building2, Megaphone, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ActivitiesSection() {
  const activities = [
    {
      title: "دورات تدريبية وورش عمل",
      icon: <Presentation />,
      color: "#218875",
      desc: "برامج تدريبية متخصصة لتنمية المهارات."
    },
    {
      title: "المؤتمرات والفعاليات",
      icon: <Mic2 />,
      color: "#4ABA78",
      desc: "ملتقيات تجمع الخبراء لتبادل المعرفة."
    },
    {
      title: "البرامج التعليمية",
      icon: <GraduationCap />,
      color: "#98C673",
      desc: "مبادرات تعليمية مبتكرة لجميع المراحل."
    },
    {
      title: "المنح والدعم التعليمي",
      icon: <HeartHandshake />,
      color: "#F79237",
      desc: "فرص للمتميزين والمحتاجين لإكمال تعليمهم."
    },
    {
      title: "الشراكات التعليمية",
      icon: <Building2 />,
      color: "#2E4A8F",
      desc: "تعاون مثمر مع المؤسسات الرائدة."
    },
    {
      title: "حملات التوعية",
      icon: <Megaphone />,
      color: "#F15D4C",
      desc: "مبادرات لتعزيز الوعي المجتمعي."
    },
    {
      title: "دعم المشاريع المبتكرة",
      icon: <Lightbulb />,
      color: "#FFCE49",
      desc: "احتضان الأفكار الإبداعية في التعليم."
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="activities" className="py-24 bg-white relative overflow-hidden" dir="rtl">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 skew-x-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-right max-w-2xl">
            <motion.span 
              className="text-[#BB9661] font-bold text-lg mb-2 block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              ماذا نقدم
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#25343F] mb-6 font-dubai"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              الأنشطة والبرامج
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              مجموعة متنوعة من البرامج والمبادرات التي تهدف إلى تحقيق رسالتنا في بناء مجتمع المعرفة.
            </motion.p>
          </div>
          
          <div className="hidden md:block">
            {/* Can add a decorative image or element here if needed */}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <Card className="group hover:-translate-y-2 transition-transform duration-300 border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl bg-white">
                <CardContent className="p-6">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 text-white shadow-md group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: activity.color }}
                  >
                    {React.cloneElement(activity.icon, { size: 24 })}
                  </div>
                  <h3 className="text-xl font-bold text-[#25343F] mb-3 group-hover:text-[#BB9661] transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {activity.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
