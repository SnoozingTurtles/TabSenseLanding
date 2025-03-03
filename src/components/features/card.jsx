import { useFeatureStore } from "./store";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const FeatureCard = ({ gradient, children, id }) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

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

export const Todo = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <img
        className={cn(" w-full rounded-xl shadow-lg transition-transform")}
        src="tres.png"
        alt=""
      />
    </FeatureCard>
  );
};

export const Colors = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <img
        className={cn(" w-full rounded-xl shadow-lg transition-transform")}
        src="tres.png"
        alt=""
      />
    </FeatureCard>
  );
};

export const Availability = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <img
        className={cn(" w-full rounded-xl shadow-lg transition-transform")}
        src="tres.png"
        alt=""
      />
    </FeatureCard>
  );
};

export const Music = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <img
        className={cn(" w-full rounded-xl shadow-lg transition-transform")}
        src="tres.png"
        alt=""
      />
    </FeatureCard>
  );
};

export const SchedulingLinks = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <img
        className={cn(" w-full rounded-xl shadow-lg transition-transform")}
        src="tres.png"
        alt=""
      />
    </FeatureCard>
  );
};

export const Team = ({ id }) => {
  return (
    <FeatureCard id={id}>
      <img
        className={cn(" w-full rounded-xl shadow-lg transition-transform")}
        src="tres.png"
        alt=""
      />
    </FeatureCard>
  );
};
