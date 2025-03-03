import { stagger, useAnimate } from "framer-motion";
import {
  Availability,
  Colors,
  Music,
  SchedulingLinks,
  Team,
  Todo,
} from "../components/features/card";
import FeatureTitle from "../components/features/title";
import { MusicVisual, OtherVisual } from "../components/features/visual";
import { useFeatureStore } from "../components/features/store";
import { useEffect } from "react";
import { useHidePageOverflow } from "../utils/toggle-page-overflow";
import { useEscapePress } from "../utils/use-escape-press";

const features = [
  {
    title: "🚀 AI-Powered Grouping – Clustr organizes your tabs instantly.",
    id: "clustr",
    card: Todo,
    visual: OtherVisual,
  },
  {
    title: "🎯 Custom Rules – Set rules for smarter tab management.",
    id: "rules",
    card: Colors,
    visual: OtherVisual,
  },
  {
    title: "⚡ Quick Shortcuts – Manage tabs with simple key combos.",
    id: "shortcuts",
    card: Availability,
    visual: OtherVisual,
  },
  {
    title: "🖱️ AI Toggle – Enable or disable AI with one click.",
    id: "toggle",
    card: Music,
    visual: MusicVisual,
  },
  {
    title: "🔄 Smart Regrouping – Refresh to auto-group tabs again.",
    id: "regroup",
    card: SchedulingLinks,
    visual: OtherVisual,
  },
  {
    title: "🗑️ One-Click Cleanup – Ungroup, delete groups, close grouped tabs fast.",
    id: "ungroup",
    card: Team,
    visual: OtherVisual,
  },
  {
    title: "🗂️ Easy Tab Control – Drag tabs to group or ungroup.",
    id: "tabs",
    card: Team,
    visual: OtherVisual,
  },
  {
    title: "🌍 Smart Categorization – Shopping, research, work—auto-sorted.",
    id: "categorization",
    card: Team,
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
    <div className="-mt-32">
      <div ref={scope}>
        {features.map((feature) => (
          <feature.visual id={feature.id} key={feature.id} />
        ))}
        <div className="flex w-full items-start gap-20 px-28">
          <div className="w-full py-[50vh] font-semibold text-xl">
            <ul>
              {features.map((feature) => (
                <li key={feature.id}>
                  <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
                </li>
              ))}
            </ul>
          </div>
          <div className="sticky top-0 flex h-screen w-full items-center">
            <div className="relative aspect-square w-full rounded-2xl bg-transparent ">
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
