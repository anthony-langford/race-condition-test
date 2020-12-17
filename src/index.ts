import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.timeout = 5000;
axios.defaults.headers.common = {
  Authorization:
    "Bearer eb3deaca9461f94643cc77dd25f8d73e9b3bd82035fc73451fc28096210a8814",
  "Content-Type": "application/json; charset=utf-8",
};

const updateLocationItem = () => {
  return axios.post("/location-items/move-items-to-pallet", {
    items: [{ sku: "meatball", quantity: 3 }],
    pallet_id: "PL-yWIizAZT",
  });
};

const updateLocationItem2 = () => {
  return axios.post("/location-items/move-items-to-pallet", {
    items: [{ sku: "meatball", quantity: 3 }],
    pallet_id: "PL-yWIizAZT",
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
