import {
  DesignProcess,
  Home,
  ConstructionPlans,
  ProcessExecuted,
  Results,
  Footer,
  Body,
  Services,
} from "@/components";

export default function Page() {
  return (
    <main>
      <Home />
      {/*       <ConstructionPlans />
      <DesignProcess />
      <ProcessExecuted />
      <Results />
    */}
      <Services />
      <Body />
      <Footer />
    </main>
  );
}
