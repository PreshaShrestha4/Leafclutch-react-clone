import React from "react";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import ProgramOverview from "../components/ProgramOverview";
import ProgramTimeline from "../components/ProgramTimeline";
import ProgramBenefits from "../components/ProgramBenefits";
import TechTracks from "../components/TechTracks";
import EnrollPerks from "../components/EnrollPerks";
import CompletionPerks from "../components/CompletionPerks";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";
import WhatsAppFloat from "../components/WhatsAppFloat";

function About() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Our Training & Internship Program"
        subtitle="Training & Internship"
      />
      <ProgramOverview />
      <ProgramTimeline />
      <ProgramBenefits />
      <TechTracks />
      <EnrollPerks />
      <CompletionPerks />
      <StatsSection />
      <CTASection />
      <WhatsAppFloat />
    </>
  );
}

export default About;
