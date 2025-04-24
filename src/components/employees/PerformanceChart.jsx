import React, { useEffect, useRef } from "react";

const PerformanceChart = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.strokeStyle = "#e2e8f0";
    ctx.stroke();

    ctx.beginPath();
    for (let i = 1; i <= 5; i++) {
      const y = height - padding - (chartHeight / 5) * i;
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.fillStyle = "#94a3b8";
      ctx.font = "10px sans-serif";
      ctx.textAlign = "right";
      ctx.fillText(`${i * 20}`, padding - 5, y + 3);
    }
    ctx.strokeStyle = "#f1f5f9";
    ctx.stroke();

    const barWidth = (chartWidth / data.length) * 0.6;
    const barSpacing = chartWidth / data.length;

    data.forEach((point, i) => {
      const x = padding + i * barSpacing + (barSpacing - barWidth) / 2;
      const barHeight = (point.score / 100) * chartHeight;
      const y = height - padding - barHeight;

      ctx.fillStyle = "#3b82f6";
      ctx.fillRect(x, y, barWidth, barHeight);

      ctx.fillStyle = "#64748b";
      ctx.font = "10px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(point.month, x + barWidth / 2, height - padding + 15);

      ctx.fillStyle = "#1e40af";
      ctx.font = "10px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(point.score.toString(), x + barWidth / 2, y - 5);
    });

    ctx.fillStyle = "#334155";
    ctx.font = "bold 12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Performance Scores (Last 6 Months)", width / 2, 20);
  }, [data]);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={300}
      className="w-full h-full"
    />
  );
};

export default PerformanceChart;
