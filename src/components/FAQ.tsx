import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
    {
      question: t("faq.q4"),
      answer: t("faq.a4"),
    },
    {
      question: t("faq.q5"),
      answer: t("faq.a5"),
    },
    {
      question: t("faq.q6"),
      answer: t("faq.a6"),
    },
  ];
  return (
    <section id="faq" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              {t("faq.title")}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t("faq.subtitle")}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card-strong border-2 border-primary/20 hover:border-accent/40 rounded-2xl px-8 py-2 animate-fade-in-up transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left font-bold text-lg hover:text-accent transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="glass-card-strong p-8 rounded-2xl border-2 border-primary/20 inline-block">
              <p className="text-muted-foreground mb-4 text-lg">
                {t("faq.noAnswer")}
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-accent font-bold hover:text-primary transition-colors inline-flex items-center gap-3 text-lg group"
              >
                {t("faq.contact")}
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
