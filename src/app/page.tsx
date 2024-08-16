import {
  DesignProcess,
  Home,
  ConstructionPlans,
  ProcessExecuted,
  Results,
  Footer,
  Body,
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
      <Body />
      <Footer />
    </main>
  );
}
