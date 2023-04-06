"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttp = void 0;
const handleHttp = (res, err, errRaw) => {
    console.log(errRaw);
    res.status(400).json({ success: false, error: err });
};
exports.handleHttp = handleHttp;
