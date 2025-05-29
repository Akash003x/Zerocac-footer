import React, { useEffect, useState } from "react";
import "./custom.css";

const isDark = (rgb) => {
  if (!rgb) return false;
  const [r, g, b] = rgb.match(/\d+/g).map(Number);
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance < 128;
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        let bg = window.getComputedStyle(el).backgroundColor;
        let parent = el;
        while ((bg === "rgba(0, 0, 0, 0)" || bg === "transparent") && parent.parentElement) {
          parent = parent.parentElement;
          bg = window.getComputedStyle(parent).backgroundColor;
        }
        if (bg === "rgba(0, 0, 0, 0)" || bg === "transparent") {
          // If still transparent, use text color
          const color = window.getComputedStyle(el).color;
          setOnDark(!isDark(color)); // invert: black text = light bg, so use black cursor
        } else {
          setOnDark(isDark(bg));
        }
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    const hoverables = document.querySelectorAll("a, button, .icon-circle, .nav-links a");
    const handleEnter = () => setHovered(true);
    const handleLeave = () => setHovered(false);
    hoverables.forEach(el => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      hoverables.forEach(el => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div
      className={`cursor-dot ${hovered ? "hovered" : ""} ${onDark ? "cursor-white" : "cursor-black"}`}
      style={{ left: position.x, top: position.y }}
    ></div>
  );
};

export default CustomCursor;