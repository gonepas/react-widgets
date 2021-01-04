import React, {useState, useEffect} from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    console.log('hey yo');
  });
  return (
      <div>
        <div className="ui form">
          <div className="field">
            <label htmlFor="search-term">Enter the search term</label>
            <input value={term} onChange={(event) => {setTerm(event.target.value)}} id={"search-term"} type="text" className="input"/>
          </div>
        </div>
      </div>
  );
}

export default Search