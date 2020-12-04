import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.timeout = 5000;
axios.defaults.headers.common = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndhcmVob3VzZWd1eUBzZWNvbmRjbG9zZXQuY29tIiwiaWF0IjoxNjA3MDMxMjIzLCJleHAiOjE2MDcwNjcyMjN9.D3q76RCqIG-8HitPomU2vJuOLBpEze5A1UsaiB9Y_Gs",
  "Content-Type": "application/json; charset=utf-8",
};

const updateLocationItem = () => {
  return axios.post("/location-items/move-items-to-location", {
    items: [{ sku: "123", quantity: 1 }],
    from_location_code: "5A-2-4-8",
    to_location_code: "5A-1-2-3",
  });
};

const updateLocationItem2 = () => {
  return axios.post("/location-items/move-items-to-location", {
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
    console.log(results[0]?.data, results[1]?.data);
  } catch (error) {
    console.error(error.message);
  }
};

run();
