import { useState, useEffect } from "react"
import axios from "axios"
import { Pagination } from "react-bootstrap"
import Filter from "../components/Filter/Filter"
import Cards from "../components/Cards/Cards"


function CharactersPage() {
    let [pageNumber, setPageNumber] = useState(1)
    let [apiData, setApiData] = useState([])
    let {info, results} = apiData

    console.log(apiData)
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

    // Pulling data from API(Two Objects): Info(pages) & Results(char info)
    useEffect(() => {
        const getCharacter = async (pageNumber) => {
        const response = await axios.get(api);
        setApiData(response.data)
        // setPageNumber([...pageNumber, ...response.data.results]);
    };
    getCharacter()
    }, [api])

    return (
        <>
        <div>
        <h1 className="text-center">Characters</h1>
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <Filter />
                </div>
                <div className="col-8"></div>
                <div className="row">
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default CharactersPage