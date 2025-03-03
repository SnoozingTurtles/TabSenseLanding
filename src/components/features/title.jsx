import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useFeatureStore } from "./store";
import { cn } from "../../lib/utils";

const FeatureTitle = ({ children, id }) => {
  const ref = useRef(null);
  const documentRef = useRef(document);
  const [margin, setMargin] = useState("-30% 0px -30% 0px");

  useEffect(() => {
    const updateMargin = () => {
      if (window.innerWidth >= 1024) {
        setMargin("-50% 0px -50% 0px"); // Large screens
      } else {
        setMargin("-30% 0px -30% 0px"); // Default & Medium screens
      }
    };

    updateMargin(); // Run once on mount
    window.addEventListener("resize", updateMargin);

    return () => window.removeEventListener("resize", updateMargin);
  }, []);

  const isInView = useInView(ref, {
    margin,
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
        "feature-title pt-8 lg:py-16 font-heading text-2xl md:text-3xl lg:text-4xl transition-colors",
        isInView ? "text-[#6daafe]" : "text-gray-500"
      )}
    >
      {children}
    </p>
  );
};

export default FeatureTitle;
