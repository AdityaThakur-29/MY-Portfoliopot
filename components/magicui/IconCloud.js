import { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "pointer",
    tooltip: "native",
    initial: [0.08, -0.08],
    dragControl: true,
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.01,
  },
};

const renderCustomIcon = (icon) => {
  return renderSimpleIcon({
    icon,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

export default function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData).catch(err => {
      console.error("Error fetching simple icons: ", err);
    });
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon)
    );
  }, [data]);

  if (!mounted) return null;

  return (
    <div className="icon-cloud-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", minHeight: "300px" }}>
      {renderedIcons ? (
        <Cloud {...cloudProps}>
          {renderedIcons}
        </Cloud>
      ) : (
        <div className="icon-cloud-loading" style={{ color: "#64748b", fontSize: "0.9rem" }}>
          Loading cloud...
        </div>
      )}
    </div>
  );
}
