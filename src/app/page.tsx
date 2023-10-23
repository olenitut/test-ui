import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { button } from "@/components/ui/button";

export default function Home() {
  const btnClasses = button({ intent: "secondary", size: "small" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Accordion type="single" collapsible className="w-60">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-red-900">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
            <button className={btnClasses}>here</button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
