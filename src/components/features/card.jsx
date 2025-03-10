import { useFeatureStore } from "./store";
// import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const FeatureCard = ({ gradient, children, id }) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full rounded-2xl lg:transition-opacity py-12 flex items-center justify-center",
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
      <div
        className="w-4/5 
         h-auto hidden dark:block perspective-1000 transform transition-all duration-500 
    lg:hover:scale-105 hover:rotate-x-3 hover:rotate-y-3 
    shadow-lg hover:shadow-2xl shadow-gray-600/50"
      >
        <img src="/cards/TS_1.webp" alt="" />
      </div>
      <div
        className="w-4/5
         h-auto block dark:hidden 
    perspective-1000 transform transition-all duration-500 
    lg:hover:scale-105 hover:rotate-x-3 hover:rotate-y-3 
    shadow-lg hover:shadow-2xl shadow-gray-600/50"
      >
        <img src="/cards/TS1.webp" alt="" />
      </div>
    </FeatureCard>
  );
};

export const Rules = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <div
        className="w-4/5 
         h-auto hidden dark:block perspective-1000 transform transition-all duration-500 
    lg:hover:scale-105 hover:rotate-x-3 hover:rotate-y-3 
    shadow-lg hover:shadow-2xl shadow-gray-600/50"
      >
        <img src="/cards/TS_2.webp" alt="" />
      </div>
      <div
        className="w-4/5 
         h-auto block dark:hidden perspective-1000 transform transition-all duration-500 
    lg:hover:scale-105 hover:rotate-x-3 hover:rotate-y-3 
    shadow-lg hover:shadow-2xl shadow-gray-600/50"
      >
        <img src="/cards/TS2.webp" alt="" />
      </div>
    </FeatureCard>
  );
};

export const Shortcuts = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <div
        className="w-4/5 
         h-auto hidden dark:block perspective-1000 transform transition-all duration-500 
    lg:hover:scale-105 hover:rotate-x-3 hover:rotate-y-3 
    shadow-lg hover:shadow-2xl shadow-gray-600/50"
      >
        <img src="/cards/TS_3.webp" alt="" />
      </div>
      <div
        className="w-4/5 
         h-auto block dark:hidden perspective-1000 transform transition-all duration-500 
    lg:hover:scale-105 hover:rotate-x-3 hover:rotate-y-3 
    shadow-lg hover:shadow-2xl shadow-gray-600/50"
      >
        <img src="/cards/TS3.webp" alt="" />
      </div>
    </FeatureCard>
  );
};

export const Toggle = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <div
        className="w-4/5 
         h-auto hidden dark:block perspective-1000 transform transition-all duration-500 
    lg:hover:scale-105 hover:rotate-x-3 hover:rotate-y-3 
    shadow-lg hover:shadow-2xl shadow-gray-600/50"
      >
        <img src="/cards/TS_4.webp" alt="" />
      </div>
      <div
        className="w-4/5 
         h-auto block dark:hidden perspective-1000 transform transition-all duration-500 
    lg:hover:scale-105 hover:rotate-x-3 hover:rotate-y-3 
    shadow-lg hover:shadow-2xl shadow-gray-600/50"
      >
        <img src="/cards/TS4.webp" alt="" />
      </div>
    </FeatureCard>
  );
};

export const TabManagement = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <div
        className="w-4/5 
         h-auto hidden dark:block perspective-1000 transform transition-all duration-500 
    lg:hover:scale-105 hover:rotate-x-3 hover:rotate-y-3 
    shadow-lg hover:shadow-2xl shadow-gray-600/50"
      >
        <img src="/cards/TS_5.webp" alt="" />
      </div>
      <div
        className="w-4/5 
         h-auto block dark:hidden perspective-1000 transform transition-all duration-500 
    lg:hover:scale-105 hover:rotate-x-3 hover:rotate-y-3 
    shadow-lg hover:shadow-2xl shadow-gray-600/50"
      >
        <img src="/cards/TS5.webp" alt="" />
      </div>
    </FeatureCard>
  );
};

export const Tabs = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <div
        className="w-4/5 
         h-auto hidden dark:block perspective-1000 transform transition-all duration-500 
    lg:hover:scale-105 hover:rotate-x-3 hover:rotate-y-3 
    shadow-lg hover:shadow-2xl shadow-gray-600/50"
      >
        <img src="/cards/TS_6.webp" alt="" />
      </div>
      <div
        className="w-4/5 
         h-auto block dark:hidden perspective-1000 transform transition-all duration-500 
    lg:hover:scale-105 hover:rotate-x-3 hover:rotate-y-3 
    shadow-lg hover:shadow-2xl shadow-gray-600/50"
      >
        <img src="/cards/TS6.webp" alt="" />
      </div>
    </FeatureCard>
  );
};

export const Categorization = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <div
        className="w-4/5 
         h-auto hidden dark:block perspective-1000 transform transition-all duration-500 
    lg:hover:scale-105 hover:rotate-x-3 hover:rotate-y-3 
    shadow-lg hover:shadow-2xl shadow-gray-600/50"
      >
        <img src="/cards/TS_7.webp" alt="" />
      </div>
      <div
        className="w-4/5 
         h-auto block dark:hidden perspective-1000 transform transition-all duration-500 
    lg:hover:scale-105 hover:rotate-x-3 hover:rotate-y-3 
    shadow-lg hover:shadow-2xl shadow-gray-600/50"
      >
        <img src="/cards/TS7.webp" alt="" />
      </div>
    </FeatureCard>
  );
};
