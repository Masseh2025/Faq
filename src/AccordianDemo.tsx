import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          What is Frontend Mentor, and how will it help me?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Frontend Mentor gives you real-world projects so you can practice
            building responsive, accessible UIs. You&apos;ll work with actual
            briefs and designs, level up your HTML/CSS/JS, and grow a portfolio
            that demonstrates practical skills to employers.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is Frontend Mentor free?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Yes. The free tier includes a wide range of challenges. A Pro
            subscription unlocks premium designs, design files, and additional
            features, but you can learn plenty without upgrading.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Can I use Frontend Mentor projects in my portfolio?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Absolutely. Completed challenges are meant to be shared. Showcase
            them in your portfolio to highlight real-world implementations and
            your problem-solving process.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          How can I get help if I&apos;m stuck on a challenge?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Ask questions in the Frontend Mentor Discord community, search the
            community solutions for reference, or break the problem down and
            tackle one piece at a time. Sharing a minimal repro often speeds up
            feedback.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
