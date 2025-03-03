import { stagger, useAnimate } from "framer-motion";
import {
  Shortcuts,
  Rules,
  Toggle,
  Regroup,
  Ungroup,
  Clustr,
  Tabs,
  Categorization
} from "../components/features/card";
import FeatureTitle from "../components/features/title";
import { MusicVisual, OtherVisual } from "../components/features/visual";
import { useFeatureStore } from "../components/features/store";
import { useEffect } from "react";
import { useHidePageOverflow } from "../utils/toggle-page-overflow";
import { useEscapePress } from "../utils/use-escape-press";

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
    title: "⚡ Quick Shortcuts : Manage tabs with simple key combos — find details in the User Guide.",
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
    title:
    "🗑️ One-Click Cleanup : Ungroup, delete groups, close grouped tabs.",
    id: "ungroup",
    card: Ungroup,
    visual: OtherVisual,
  },
  {
    title: "🔄 Smart Regrouping : Refresh to auto-group tabs again.",
    id: "regroup",
    card: Regroup,
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
  const [scope, animate] = useAnimate();
  const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature);
  const lastFullscreenFeature = useFeatureStore(
    (state) => state.lastFullscreenFeature
  );
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  const onEscapePress = () => {
    if (fullscreenFeature) setFullscreenFeature(null);
  };

  useEscapePress(onEscapePress);
  useHidePageOverflow(!!fullscreenFeature);

  useEffect(() => {
    if (fullscreenFeature) {
      animate([
        [
          ".feature-title",
          { opacity: 0, x: "-200px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 1, scale: 1, pointerEvents: "auto" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 0, scale: 0 }, { at: "<" }],
        [".active-card .show-me-btn", { opacity: 0 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 1, y: "0px" },
          { at: "<", duration: 0.3 },
        ],
      ]);
    } else {
      animate([
        [
          ".feature-title",
          { opacity: 1, x: "0px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 0, scale: 0.75, pointerEvents: "none" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 1, scale: 1 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 0, y: "300px" },
          { at: "<", duration: 0.3 },
        ],
        [".active-card .show-me-btn", { opacity: 1 }],
      ]);
    }
  }, [animate, fullscreenFeature, lastFullscreenFeature]);

  return (
    <div className="lg:-mt-[20rem] px-8 text-center md:px-16 poppins">
      <div ref={scope}>
        {features.map((feature) => (
          <feature.visual id={feature.id} key={feature.id} />
        ))}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
          {/* Feature List */}
          <div className="w-full lg:py-[50vh] font-semibold text-lg md:text-xl">
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature.id}>
                  <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
                  <div className="sticky top-0 flex w-full lg:hidden justify-center lg:items-center">
                    <div className="relative aspect-square w-full max-w-xs md:max-w-md lg:hidden rounded-2xl bg-transparent">
                      {features.map((feature) => (
                        <feature.card id={feature.id} key={feature.id} />
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Feature Cards */}
          <div className="sticky top-0 flex w-full justify-center h-screen lg:items-center">
            <div className="hidden lg:block lg:relative aspect-square w-full scale-110 max-w-xs md:max-w-md lg:max-w-lg rounded-2xl bg-transparent">
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
