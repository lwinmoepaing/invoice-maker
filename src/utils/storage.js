import localforage from "localforage";

export const saveLocaleData = async (key, data) => {
  try {
    await localforage.setItem(key, data);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const retrieveLocalData = async (key) => {
  try {
    const data = localforage(key);
    return data;
  } catch (e) {
    console.log(e);
    return "";
  }
};
