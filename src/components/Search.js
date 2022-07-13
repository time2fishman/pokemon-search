import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Search({ setSearchParams }) {
    let navigate = useNavigate()
    const [searchString, setSearchString] = useState('')


    function handleChange(event) {
        setSearchString(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        // console.log(searchString)
        setSearchParams(searchString)
        navigate(`/results?query=${searchString}`)
    }

    return (
        <div>
            <h2>Search for a Pokemon</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='searchString'>Search: </label>
                <input
                    type='text'
                    id='searchString'
                    name='searchString'
                    onChange={handleChange}
                    required
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Search