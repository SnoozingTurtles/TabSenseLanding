import { useFeatureStore } from "./store";
// import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const FeatureCard = ({ gradient, children, id }) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full rounded-2xl lg:transition-opacity py-12 lg:flex lg:items-center lg:justify-center",
        inViewFeature === id
          ? "active-card lg:opacity-100"
          : "pointer-events-none lg:opacity-0"
      )}
    >
      {children}
      {/* <button
        onClick={() => setFullscreenFeature(id)}
        className="show-me-btn absolute bottom-6 right-6 rounded-xl bg-black px-4 py-2 text-white shadow-lg"
      >
        Show me
      </button> */}
    </div>
  );
};

export const Clustr = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <video autoPlay loop muted playsInline className="w-full h-auto hidden dark:block">
        <source src="videos/TS_11.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted playsInline className="w-full h-auto block dark:hidden">
        <source src="videos/TS1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </FeatureCard>
  );
};

export const Rules = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <video autoPlay loop muted playsInline className="w-full h-auto hidden dark:block">
        <source src="videos/TS_12.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted playsInline className="w-full h-auto block dark:hidden">
        <source src="videos/TS2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </FeatureCard>
  );
};

export const Shortcuts = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <video autoPlay loop muted playsInline className="w-full h-auto hidden dark:block">
        <source src="videos/TS_13.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted playsInline className="w-full h-auto block dark:hidden">
        <source src="videos/TS3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </FeatureCard>
  );
};

export const Toggle = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <video autoPlay loop muted playsInline className="w-full h-auto hidden dark:block">
        <source src="videos/TS_14.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted playsInline className="w-full h-auto block dark:hidden">
        <source src="videos/TS4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </FeatureCard>
  );
};

export const Ungroup = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <video autoPlay loop muted playsInline className="w-full h-auto hidden dark:block">
        <source src="videos/TS_15.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted playsInline className="w-full h-auto block dark:hidden">
        <source src="videos/TS5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </FeatureCard>
  );
};

export const Regroup = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <video autoPlay loop muted playsInline className="w-full h-auto hidden dark:block">
        <source src="videos/TS_16.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted playsInline className="w-full h-auto block dark:hidden">
        <source src="videos/TS6.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </FeatureCard>
  );
};

export const Tabs = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <video autoPlay loop muted playsInline className="w-full h-auto hidden dark:block">
        <source src="videos/TS_17.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted playsInline className="w-full h-auto block dark:hidden">
        <source src="videos/TS7.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </FeatureCard>
  );
};

export const Categorization = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <video autoPlay loop muted playsInline className="w-full h-auto hidden dark:block"> 
        <source src="videos/TS_18.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted playsInline className="w-full h-auto block dark:hidden">
        <source src="videos/TS8.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </FeatureCard>
  );
};
