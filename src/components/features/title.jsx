import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useFeatureStore } from "./store";
import { cn } from "../../lib/utils";

const FeatureTitle = ({ children, id }) => {
  const ref = useRef(null);
  const documentRef = useRef(document);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
    root: documentRef,
  });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <p
      ref={ref}
      className={cn(
        "feature-title py-16 font-heading text-4xl transition-colors",
        isInView ? "text-[#6daafe]" : "text-gray-500"
      )}
    >
      {children}
    </p>
  );
};

export default FeatureTitle;
