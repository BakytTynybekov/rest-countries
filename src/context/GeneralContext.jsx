import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  const [mode, setMode] = useState(true);
  const [searchValue, setSearchCountry] = useState("");
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState(null);

  const fetchCountries = async () => {
    const res = await axios.get("https://restcountries.com/v3.1/all");
    setCountries(res.data);
  };

  const fetchCountriesByName = async (name) => {
    const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    setCountries(res?.data);
  };

  const fetchCountriesByRegion = async (region) => {
    const res = await axios.get(
      `https://restcountries.com/v3.1/region/${region}`
    );
    setCountries(res?.data);
  };

  useEffect(() => {
    fetchCountries();
  }, [searchValue]);

  useEffect(() => {
    if (searchValue.length === 0) {
      fetchCountries();
    }
    fetchCountriesByName(searchValue);
  }, [searchValue]);

  useEffect(() => {
    fetchCountriesByRegion(region);
  }, [region]);
  const data = {
    mode: mode,
    setMode: setMode,
    setSearchCountry: setSearchCountry,
    setRegion: setRegion,
    countries: countries,
  };
  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
};
