import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const PlainD3 = () => {
  const svgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadSvg = async () => {
      const response = await fetch('./Profile.svg');
      const svgContent = await response.text();

      if (svgContainerRef.current) {
        svgContainerRef.current.innerHTML = svgContent;

        const svg = d3.select(svgContainerRef.current).select<SVGSVGElement>('svg');
        const rect = svg.select<SVGRectElement>('#profile-u-hull');

        if (!rect.empty()) {
          // Clear any existing styles
          rect.attr('style', null);

          // Get original rectangle dimensions and position
          const x = parseFloat(rect.attr('x') || '0');
          const y = parseFloat(rect.attr('y') || '0');
          const width = parseFloat(rect.attr('width') || '0');
          const height = parseFloat(rect.attr('height') || '0');
          const completedWidth = (30 / 100) * width;

          // Remove any existing completion rect
          svg.select('#profile-u-hull-completion').remove();

          // Create a new filled rectangle for the completion
          const completionRect = svg.append('rect')
            .attr('id', 'profile-u-hull-completion')
            .attr('x', x)
            .attr('y', y)
            .attr('width', completedWidth)
            .attr('height', height)
            .attr('fill', 'green')
            .node();

          // Insert the completion rect before the original rect
          if (completionRect) {
            rect.node()?.parentNode?.insertBefore(completionRect, rect.node() || null);
          }
        }
      }
    };

    loadSvg();
  }, []);

  return (
    <div ref={svgContainerRef}></div>
  );
};