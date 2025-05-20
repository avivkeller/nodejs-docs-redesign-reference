interface CircularIconProps {
  symbol?: string;
  color?: string;
  textColor?: string;
  className?: string;
}

export default function CircularIcon({
  symbol = "C",
  color = "#b35900",
  textColor = "white",
  className = "",
}: CircularIconProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        width: "1.35em",
        height: "1.35em",
        backgroundColor: color,
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        color: textColor,
        fontWeight: "bold",
        lineHeight: 1,
        fontSize: "0.8em",
        verticalAlign: "middle",
        marginRight: "0.75em",
      }}
      className={className}
      role="presentation"
      aria-label={`${symbol} icon`}
    >
      {symbol}
    </span>
  );
}
