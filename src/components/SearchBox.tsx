import React,{ useState, useCallback, Dispatch,SetStateAction } from "react";
import axios from "axios";
import debounce from 'lodash.debounce';
import {AirlineItemType} from "../types/globalTypes";
import {isEmpty} from "../utils/globalFuncs";

interface Props{
  setLoadingData: Dispatch<SetStateAction<boolean>>;
  setAirlineCompanies: Dispatch<SetStateAction<AirlineItemType[] | undefined>>
}

function SearchBox({setAirlineCompanies, setLoadingData}:Props){
  const [textInput, setTextInput] = useState("");

  const changeHandler = (e: { target: HTMLInputElement }) => {
    const value = e.target.value;
    setTextInput(value);
    setAirlineCompanies([]);

    if (!isEmpty(value)){
      setLoadingData(true);
    }else {
      setLoadingData(false);
    }

    return debouncedChangeHandler(value);
  };

  const apiCall = (text: string) => {
    if (isEmpty(text))
      return;

    axios.get(`https://frontend-assignment-api.azurewebsites.net/api/search?query=${text}`)
      .then(res => {
        setLoadingData(false);
        setAirlineCompanies(res.data);
      })
      .catch(error => console.log(error))
  }

  const debouncedChangeHandler = useCallback(debounce(apiCall, 1000), []);

  return(
    <div className="header-container" >
      <div className="header-wrapper">
        <img className="company-logo"
           src="https://blackrabbit-frontend-assignment.azurewebsites.net/blackrabbit-black-logo.cc2311f3.svg"
           alt="company-logo" />
        <span className="black-rabbit-header">BLACK RABBIT</span>
        <span className="black-rabbit-header2">KNOW YOUR AIRLINE!</span>

        <div className="search-airline-input-wrapper">
          <input className="search-airline-input" placeholder="Search for airline" onChange={changeHandler} value={textInput}/>
        </div>
      </div>
    </div>
  )
}
export default SearchBox