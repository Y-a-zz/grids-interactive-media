
import Asset2 from '@/util/shapes/SVG/Asset2.svg';
import Asset3 from '@/util/shapes/SVG/Asset3.svg';
import HalfCircle from '@/util/shapes/SVG/Halfcircle.svg';
import Circle from '@/util/shapes/SVG/Circle.svg';
import Vierkant from '@/util/shapes/SVG/Vierkant.svg';
import Driehoek from '@/util/shapes/SVG/Driehoek.svg';
import Ruitvorm from '@/util/shapes/SVG/Ruitvorm.svg';
import HalveCirkelOnderkant from '@/util/shapes/SVG/Halve-cirkel-onderkant.svg';
import Trapezium from '@/util/shapes/SVG/Trapezium.svg';
import Ster from '@/util/shapes/SVG/Ster.svg';
import Flower from '@/util/shapes/SVG/Flower.svg'

import {FC, SVGProps} from "react";
type SVGComponent = FC<SVGProps<SVGSVGElement>>;

export const componentMap: Record<string, SVGComponent> = {
    Asset2: Asset2,
    Asset3: Asset3,
    HalfCircle: HalfCircle,
    Circle:Circle,
    Vierkant:Vierkant,
    Driehoek:Driehoek,
    Ruitvorm:Ruitvorm,
    HalveCirkelOnderkant:HalveCirkelOnderkant,
    Trapezium:Trapezium,
    Ster:Ster,
    Flower:Flower
};

export const shapeOptions: {
    id: number;
    componentKey: string;
}[] = [
    {id: 235, componentKey: "Asset2"},
    {id: 131, componentKey: "Asset3"},
    {id: 546, componentKey: "HalfCircle"},
    {id: 657, componentKey: "Circle"},
    {id: 676, componentKey: "Vierkant"},
    {id: 621, componentKey: "Driehoek"},
    {id: 778, componentKey: "Ruitvorm"},
    {id: 812, componentKey: "HalveCirkelOnderkant"},
    {id: 998, componentKey: "Trapezium"},
    {id: 104, componentKey: "Ster"},
    {id: 666, componentKey: "Flower"}

];
/*
export {
    Asset2,
    Asset3,
    HalfCircle,
    Circle,
    Vierkant,
    Driehoek,
    Ruitvorm,
    HalveCirkelOnderkant,
    Trapezium,
    Ster,
};*/
