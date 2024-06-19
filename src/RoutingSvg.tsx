import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";

export const RoutingSvg = () => {

    const params = new URLSearchParams(window.location.search);

    console.log(Object.fromEntries(params).part, "params")

    const part = Object.fromEntries(params).part;

    const navigate = useNavigate();

    const afterInjection = (svg: any) => {

        console.log(svg, "svg")

        const deck02 = document.getElementById("profile-u-deck02");
        const maindeck = document.getElementById("profile-u-maindeck");
        const deck01 = document.getElementById("profile-u-deck01");
        const hull = document.getElementById("profile-u-hull");
        // const helipadRect = document.getElementById("helipad-rect");

        // helipadRect?.setAttribute("fill", "green");
        // helipadRect?.setAttribute("width", "10%");

        // helipad?.setAttribute("fill", "green");
        // helipad?.setAttribute("mask", "url(#helipad-mask)");

        

        deck02?.addEventListener("mousedown", (e) => {
            console.log('clicked deck02', e)
            navigate('/routing?part=Deck02')
        });
        maindeck?.addEventListener("mousedown", (e) => {
            console.log('clicked maindeck', e)
            navigate('/routing?part=MainDeck')
        });
        deck01?.addEventListener("mousedown", (e) => {
            console.log('clicked deck01', e)
            navigate('/routing?part=Deck01')
        });
        hull?.addEventListener("mousedown", (e) => {
            console.log('clicked hull', e)
            navigate('/routing?part=Hull')
        });

        // helipad?.addEventListener("mouseover", (e) => {
        //     console.log('hovered', e)
        // });


        



        return;
    };

    return (
        <div style={{ position: "relative" }}>
            <h1 onClick={() => navigate('/routing')}>Routing SVG</h1>
            <div id="svgParent">
                <ReactSVG afterInjection={afterInjection} src={part ? `${part}.svg`  :'./Profile.svg'} />
            </div>
        </div>
    );
}