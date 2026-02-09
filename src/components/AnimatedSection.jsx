import { motion } from "framer-motion";

export const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // يبدأ مخفي ومنزل شوية
      whileInView={{ opacity: 1, y: 0 }} // يظهر ويصعد لو وصلت الشاشة
      viewport={{ once: true, amount: 0.3 }} // مرة واحدة فقط، عند ظهور 30% من العنصر
      transition={{ duration: 0.8, ease: "easeOut" }} // سرعة الانيميشن
    >
      {children}
    </motion.div>
  );
};
