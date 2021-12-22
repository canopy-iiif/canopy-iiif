"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTheme = exports.keyframes = exports.css = exports.styled = exports.media = exports.theme = void 0;
var react_1 = require("@stitches/react");
exports.theme = {};
exports.media = {
    xxs: "(max-width: 349px)",
    xs: "(max-width: 575px)",
    sm: "(max-width: 767px)",
    md: "(max-width: 991px)",
    xl: "(max-width: 1199px)",
    lg: "(min-width: 1200px)",
};
exports.styled = (_a = (0, react_1.createStitches)({
    theme: exports.theme,
    media: exports.media,
}), _a.styled), exports.css = _a.css, exports.keyframes = _a.keyframes, exports.createTheme = _a.createTheme;
