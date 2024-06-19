import { ReactSVG } from "react-svg";

export const SvgComponent = (props: any) => {

    const beforeInjection = (svg: any) => {

        // console.log(svg, "svg")

        const mask = document.createElement("mask");
        const rect = document.createElement("rect");
        const defs = document.createElement("defs");

        console.log(defs, "defs")

        rect.setAttribute("x", "0");
        rect.setAttribute("y", "0");
        rect.setAttribute("width", "10%");
        rect.setAttribute("height", "100%");
        mask.setAttribute("id", "helipad-mask");
        rect.setAttribute("id", "helipad-rect")
        rect.setAttribute("fill", "green");
        mask.appendChild(rect);
        defs?.appendChild(mask);
        svg.appendChild(defs);

        // const helipadRect = document.getElementById("helipad-rect");
        // helipadRect?.setAttribute("fill", "green");
        // helipadRect?.setAttribute("width", "10%");

        return;
    };

    /* Add Functionality box */
    const afterInjection = (svg: any) => {

        console.log(svg, "svg")

        const helipad = document.getElementById("helipad-id");
        const helipadRect = document.getElementById("helipad-rect");

        helipadRect?.setAttribute("fill", "green");
        helipadRect?.setAttribute("width", "10%");

        helipad?.setAttribute("fill", "green");
        // helipad?.setAttribute("mask", "url(#helipad-mask)");

        

        helipad?.addEventListener("mousedown", (e) => {
            console.log('clicked', e)
        });

        helipad?.addEventListener("mouseover", (e) => {
            console.log('hovered', e)
        });


        



        return;
    };

    // beforeInjection={beforeInjection}
    return (
        <div style={{ position: "relative" }}>
            <div id="svgParent">
                <ReactSVG afterInjection={afterInjection} src={'./test.svg'} />
            </div>
        </div>
    );
};
