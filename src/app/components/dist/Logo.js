"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
// Components
var Box_1 = require("@mui/material/Box");
// Assets
var logo_svg_1 = require("../assets/logo.svg");
var Logo = styled_components_1["default"].img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 60px;\n  height: 60px;\n"], ["\n  width: 60px;\n  height: 60px;\n"])));
var LogoContainer = styled_components_1["default"](Box_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var LogoImage = function () {
    return (react_1["default"].createElement(LogoContainer, null,
        react_1["default"].createElement(Logo, { src: logo_svg_1["default"] })));
};
exports["default"] = LogoImage;
var templateObject_1, templateObject_2;
