import {
  Shortcuts,
  Rules,
  Toggle,
  Clustr,
  Tabs,
  Categorization,
  TabManagement,
} from "../components/features/card";
import FeatureTitle from "../components/features/title";
import { MusicVisual, OtherVisual } from "../components/features/visual";

const features = [
  {
    title: "🤖 Meet Clustr: AI-Powered tab organizer that organizes tabs.",
    id: "clustr",
    card: Clustr,
    visual: OtherVisual,
  },
  {
    title: "🎯 Custom Rules : Set rules for smarter tab management.",
    id: "rules",
    card: Rules,
    visual: OtherVisual,
  },
  {
    title:
      "⚡ Quick Shortcuts : Manage tabs with simple key combos — find details in the User Guide.",
    id: "shortcuts",
    card: Shortcuts,
    visual: OtherVisual,
  },
  {
    title: "🖱️ AI Toggle : Enable or disable AI with one click.",
    id: "toggle",
    card: Toggle,
    visual: MusicVisual,
  },
  {
    title: "🔄 Smart Tab Management: Ungroup & Auto-Regroup Tabs.",
    id: "tabmanagement",
    card: TabManagement,
    visual: OtherVisual,
  },

  {
    title: "🗂️ Easy Tab Control : Drag tabs to group or ungroup.",
    id: "tabs",
    card: Tabs,
    visual: OtherVisual,
  },
  {
    title: "🌍 Smart Categorization : Shopping, research, work auto-sorted.",
    id: "categorization",
    card: Categorization,
    visual: OtherVisual,
  },
];

function Products() {
  return (
    <div className="px-6 md:px-12 lg:px-16 text-center poppins pb-20">
  <div>
    {/* Feature Visuals */}
    {features.map((feature) => (
      <feature.visual id={feature.id} key={feature.id} />
    ))}

    <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-20">
      {/* Feature List */}
      <div className="w-full lg:py-[40vh] font-semibold text-base sm:text-lg md:text-xl">
        <ul className="space-y-4">
          {features.map((feature) => (
            <li key={feature.id}>
              <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>

              {/* Mobile Feature Cards */}
              <div className="sticky top-0 w-auto h-auto lg:hidden flex justify-center items-center">
                <div className="relative aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl bg-transparent flex justify-center items-center">
                  <feature.card id={feature.id} key={feature.id} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Feature Cards */}
      <div className="hidden lg:flex sticky top-0 w-full justify-center lg:h-screen items-center">
        <div>
          {features.map((feature) => (
            <feature.card id={feature.id} key={feature.id} />
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Products;
