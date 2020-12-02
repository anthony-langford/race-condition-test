"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default.defaults.baseURL = "http://localhost:3000";
axios_1.default.defaults.timeout = 1000;
axios_1.default.defaults.headers.common = {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndhcmVob3VzZWd1eUBzZWNvbmRjbG9zZXQuY29tIiwiaWF0IjoxNjA2NzUzNDg0LCJleHAiOjE2MDY3ODk0ODR9.0IoLvcSzYm148HFhSqhObxNktCL3J8_eonkyAbz-8mg",
    "Content-Type": "application/json; charset=utf-8",
};
const updateLocationItem = () => {
    return axios_1.default.post("/location-items/move-items-to-location", {
        items: [{ sku: "123", quantity: 1 }],
        from_location_code: "5A-2-4-8",
        to_location_code: "5A-1-2-3",
    });
};
const updateLocationItem2 = () => {
    return axios_1.default.post("location-items/move-items-to-location", {
        items: [{ sku: "123", quantity: 1 }],
        from_location_code: "5A-2-4-8",
        to_location_code: "5A-1-2-3",
    });
};
const run = async () => {
    try {
        const results = await Promise.all([
            updateLocationItem(),
            updateLocationItem2(),
        ]);
        console.log(results[0].data, results[1].data);
    }
    catch (error) {
        console.error(error.message);
    }
};
run();
//# sourceMappingURL=index.js.map