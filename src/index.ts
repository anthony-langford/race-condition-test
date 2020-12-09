import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.timeout = 5000;
axios.defaults.headers.common = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndhcmVob3VzZWd1eUBzZWNvbmRjbG9zZXQuY29tIiwiaWF0IjoxNjA3NDQ0MDc2LCJleHAiOjE2MDc0ODAwNzZ9.elfG5xFjfCAQa7WYCFUiYBdlIyLUkuGfwOlXcZFLBWE",
  "Content-Type": "application/json; charset=utf-8",
};

const updateLocationItem = () => {
  return axios.post("/location-items/move-items-to-pallet", {
    items: [{ sku: "meatball", quantity: 3 }],
    pallet_id: "PL-aOaJ4hb2",
  });
};

const updateLocationItem2 = () => {
  return axios.post("/location-items/move-items-to-pallet", {
    items: [{ sku: "meatball", quantity: 3 }],
    pallet_id: "PL-aOaJ4hb2",
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
    console.log(error.message);
    console.error(
      `${error?.response?.data?.statusCode} ${error?.response?.data?.message}`
    );
  }
};

run();
