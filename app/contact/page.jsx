"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.section
      className="py-24 min-h-screen"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-accent">
          Get in touch
        </h2>
        <p className="text-white/80 max-w-lg mx-auto mb-8">
          Have a question or want to work together? Reach out via the links below or send a message.
        </p>
        <Social
          containerStyles="flex justify-center gap-4 mb-8"
          iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary hover:transition-all duration-500"
        />
        <Button variant="outline" asChild className="uppercase">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </motion.section>
  );
};

export default ContactPage;
