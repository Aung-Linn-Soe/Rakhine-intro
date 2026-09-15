import { TOWNS } from "@/lib/data";
import TownView from "@/components/TownView";

export function generateStaticParams() {
  return TOWNS.map((t) => ({ id: t.id }));
}

export default function TownPage({ params }) {
  return <TownView id={params.id} />;
}
