import React from 'react';
import { ReactSVG } from 'react-svg';
import * as d3 from 'd3';

export const D3Test = () => {
    const updateSvg = (svg: SVGSVGElement | null) => {
        if (!svg) return;

        const d3Svg = d3.select(svg);
        const rect = d3Svg.select<SVGRectElement>('#helipad-id');

        if (!rect.empty()) {
            // Clear any existing styles
            rect.attr('style', null);

            // Get original rectangle dimensions and position
            const x = parseFloat(rect.attr('x') || '0');
            const y = parseFloat(rect.attr('y') || '0');
            const width = parseFloat(rect.attr('width') || '0');
            const height = parseFloat(rect.attr('height') || '0');
            const completedWidth = (30 / 100) * width;

            rect.attr('fill', 'green') // Fill with green to show completion
            .attr('opacity', '0.5')
            .attr('width', completedWidth);

            // Remove any existing mask
            // d3Svg.select('#profile-u-deck01-mask').remove();

            // // Create a mask
            // const mask = d3Svg.append('mask')
            //     .attr('id', 'profile-u-deck01-mask');

            // Add a white rectangle to the mask
            // mask.append('rect')
            //     .attr('x', x)
            //     .attr('y', y)
            //     .attr('width', width)
            //     .attr('height', height)
            //     .attr('fill', 'white')
            //     .attr('opacity', '0.5');


            // Add a black rectangle to the mask to cover the uncompleted area
            // mask.append('rect')
            //     .attr('x', x + completedWidth)
            //     .attr('y', y)
            //     .attr('width', width - completedWidth)
            //     .attr('height', height)
            //     .attr('fill', 'black')
                // .attr('opacity', '0.5');


            // Apply the mask to the original rectangle
            
        }
    };

    return (
        <div>
            <ReactSVG
                src="./test.svg"
                afterInjection={updateSvg}
            />
        </div>
    );
};
