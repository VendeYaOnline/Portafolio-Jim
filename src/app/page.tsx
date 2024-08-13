import {
  DesignProcess,
  Home,
  ConstructionPlans,
  ProcessExecuted,
  Results,
} from "@/components";

export default function Page() {
  return (
    <main>
      <Home />
      <ConstructionPlans />
      <DesignProcess />
      <ProcessExecuted />
      <Results />
    </main>
  );
}
