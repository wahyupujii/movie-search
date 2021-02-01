import React , {useState}from 'react'

const Search = ({search}) => {
    const [searchValue , setSearchValue] = useState("");

    const handleSearchInputChanges = (event) => {
        setSearchValue(event.target.value);
    }

    const resetInputField = () => {
        setSearchValue("");
    }

    const searchFunction = (event) => {
        event.preventDefault();
        search(searchValue);
        resetInputField();
    }

    return (

        <form className="row g-3">
            <div>
                <input 
                    className="form-control"
                    value={searchValue}
                    onChange={handleSearchInputChanges}
                    type="text"
                    style={{
                        width: "40%",
                        margin: "20px auto"
                    }}
                />
                <button type="submit" className="btn btn-primary mb-3" onClick={searchFunction}>Search</button>
            </div>
        </form>
    )
}

export default Search
