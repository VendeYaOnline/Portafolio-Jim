import {
  DesignProcess,
  Home,
  ConstructionPlans,
  ProcessExecuted,
  Results,
  Footer,
} from "@/components";

export default function Page() {
  return (
    <main>
      <Home />
      <ConstructionPlans />
      <DesignProcess />
      <ProcessExecuted />
      <Results />
      <Footer/>
    </main>
  );
}
