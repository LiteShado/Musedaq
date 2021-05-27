

const Searchbar = (props) => {
    return (
        <form>
            <label for="genre"> Search by Genre: </label>
                <select name="genre" id="genre">
                    <option value="Hip Hop">Hip Hop</option>
                    <option value="RnB">RnB</option>
                    <option value="Acoustic">Acoustic</option>
                    <option value="Pop">Pop</option>
                </select>
            <button value = {props.searchGenre} onChange={(e) => props.setSearchGenre(e.target.value)} placeholder="submit"></button>
        </form>
    )
}

export default Searchbar
