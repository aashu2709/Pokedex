import useDebounce from '../../hooks/useDebounce'
import './Search.css'



const Search = ({updateSearchTerm}) => {
  const debounceUpdateSearch = useDebounce((e)=> updateSearchTerm(e.target.value));
  return (
    <div>
      <input 
      id='search-pokemon'
      type="text"
      placeholder='Which pokemon you are loking for ??'
      onChange={debounceUpdateSearch}
      />
    </div>
  )
}

export default Search
