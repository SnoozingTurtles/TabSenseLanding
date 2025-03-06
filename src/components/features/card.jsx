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
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto hidden dark:block"
      >
        <source src="https://tabsense.tech/TS_11.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block dark:hidden"
      >
        <source src="https://tabsense.tech/TS1.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </FeatureCard>
  );
};

export const Rules = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto hidden dark:block"
      >
        <source src="https://tabsense.tech/TS_12.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block dark:hidden"
      >
        <source src="https://tabsense.tech/TS2.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </FeatureCard>
  );
};

export const Shortcuts = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto hidden dark:block"
      >
        <source src="https://tabsense.tech/TS_13.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block dark:hidden"
      >
        <source src="https://tabsense.tech/TS3.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </FeatureCard>
  );
};

export const Toggle = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto hidden dark:block"
      >
        <source src="https://tabsense.tech/TS_14.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block dark:hidden"
      >
        <source src="https://tabsense.tech/TS4.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </FeatureCard>
  );
};

export const Ungroup = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto hidden dark:block"
      >
        <source src="https://tabsense.tech/TS_15.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block dark:hidden"
      >
        <source src="https://tabsense.tech/TS5.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </FeatureCard>
  );
};

export const Regroup = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto hidden dark:block"
      >
        <source src="https://tabsense.tech/TS_16.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block dark:hidden"
      >
        <source src="https://tabsense.tech/TS6.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </FeatureCard>
  );
};

export const Tabs = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto hidden dark:block"
      >
        <source src="https://tabsense.tech/TS_17.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block dark:hidden"
      >
        <source src="https://tabsense.tech/TS7.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </FeatureCard>
  );
};

export const Categorization = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto hidden dark:block text-black"
      >
        <source src="https://tabsense.tech/TS_18.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block dark:hidden"
      >
        <source src="https://tabsense.tech/TS8.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </FeatureCard>
  );
};
