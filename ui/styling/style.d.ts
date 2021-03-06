﻿//@private
declare module "ui/styling/style" {
    import styling = require("ui/styling");
    import {DependencyObservable, Property} from "ui/core/dependency-observable";
    import {View} from "ui/core/view";
    import {Color} from "color";
    import stylers = require("ui/styling/stylers");
    import styleProperty = require("ui/styling/style-property");

    export interface Thickness {
        left: number;
        top: number;
        right: number;
        bottom: number;
    }

    export interface CommonLayoutParams {
        width: number;
        height: number;

        leftMargin: number;
        topMargin: number;
        rightMargin: number;
        bottomMargin: number;

        horizontalAlignment: string;
        verticalAlignment: string;
    }

    export class Style extends DependencyObservable implements styling.Style {
        public color: Color;
        public backgroundColor: Color;
        public backgroundImage: string;
        public backpublic: string;
        public backgroundSize: string;
        public backgroundPosition: string;
        public backgroundRepeat: string;
        public borderColor: Color;
        public borderWidth: number;
        public borderRadius: number;
        public fontSize: number;
        public fontFamily: string;
        public fontStyle: string;
        public fontWeight: string;
        public font: string;
        public textAlignment: string;
        public minWidth: number;
        public minHeight: number;
        public width: number;
        public height: number;
        public margin: string;
        public marginLeft: number;
        public marginTop: number;
        public marginRight: number;
        public marginBottom: number;
        public padding: string;
        public paddingLeft: number;
        public paddingTop: number;
        public paddingRight: number;
        public paddingBottom: number;
        public horizontalAlignment: string;
        public verticalAlignment: string;
        public visibility: string;
        public opacity: number;

        new(parentView: View);

        public _beginUpdate();
        public _endUpdate();
        public _resetCssValues(): void;
        public _syncNativeProperties(): void;
        public _inheritStyleProperty(property: Property): void;
        public _inheritStyleProperties(): void;
    }

    export function registerHandler(property: Property, handler: styling.stylers.StylePropertyChangedHandler, className?: string);

    export function registerNoStylingClass(className);
    export function getHandler(property: Property, view: View): styling.stylers.StylePropertyChangedHandler;
    // Property registration
    export var colorProperty: styleProperty.Property;
    export var backgroundImageProperty: styleProperty.Property;
    export var backgroundColorProperty: styleProperty.Property;
    export var backgroundRepeatProperty: styleProperty.Property;
    export var backgroundSizeProperty: styleProperty.Property;
    export var backgroundPositionProperty: styleProperty.Property;
    export var borderColorProperty: styleProperty.Property;
    export var borderWidthProperty: styleProperty.Property;
    export var borderRadiusProperty: styleProperty.Property;
    export var backgroundInternalProperty: styleProperty.Property;
    export var fontSizeProperty: styleProperty.Property;
    export var fontFamilyProperty: styleProperty.Property;
    export var fontStyleProperty: styleProperty.Property;
    export var fontWeightProperty: styleProperty.Property;
    export var fontInternalProperty: styleProperty.Property;
    export var textAlignmentProperty: styleProperty.Property;
    export var minWidthProperty: styleProperty.Property;
    export var minHeightProperty: styleProperty.Property;
    export var visibilityProperty: styleProperty.Property;
    export var opacityProperty: styleProperty.Property;

    // Helper property holding most layout related properties available in CSS.
    // When layout related properties are set in CSS we chache them and send them to the native view in a single call.
    export var nativeLayoutParamsProperty: styleProperty.Property;
    export var widthProperty: styleProperty.Property;
    export var heightProperty: styleProperty.Property;
    export var verticalAlignmentProperty: styleProperty.Property;
    export var horizontalAlignmentProperty: styleProperty.Property;
    export var marginLeftProperty: styleProperty.Property;
    export var marginRightProperty: styleProperty.Property;
    export var marginTopProperty: styleProperty.Property;
    export var marginBottomProperty: styleProperty.Property;

    // Helper property holding all paddings. When paddings are set through CSS we cache them and send them to the native view in a single call.
    export var nativePaddingsProperty: styleProperty.Property;
    export var paddingLeftProperty: styleProperty.Property;
    export var paddingRightProperty: styleProperty.Property;
    export var paddingTopProperty: styleProperty.Property;
    export var paddingBottomProperty: styleProperty.Property;
}
