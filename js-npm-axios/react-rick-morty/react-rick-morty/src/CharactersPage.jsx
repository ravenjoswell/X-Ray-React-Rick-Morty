import { useState, useEffect } from "react"
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios"
import PaginationBar from "./components/Pagination/PaginationBar";
import Filter from "./components/Filter/Filter"
import CardsPage from "./components/Cards/CardsPage"
import "./App.css"
import Search from "./components/Search/Search";

function CharactersPage() {
    const [pageNumber, setPageNumber] = useState(1);
    const [results, setResults] = useState([]);
    const [info, setInfo] = useState({});
    let [search, setSearch] = useState("")
    const [status, setStatus] = useState('')
    // console.log(results)//character
    // console.log(info)//pages


    useEffect(() => {
        const getCharacter = async () => {
        const response = await axios.get(
            `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}`);
        setResults(response.data.results)
        setInfo(response.data.info)
    }
    getCharacter()
    }, [pageNumber, search, status])
    

    const handlePageChange = (page) => {
        setPageNumber(page)
    }

    const handleSearch = (input) => {
        setSearch(input);
        setPageNumber(1); // Reset page number on new search
    };

    const handleFilterChange = (status) => {
        setStatus(status);
    };

    const handleClearFilters = () => {
        setStatus('');
    };

    const filteredResults = results.filter((character) => {
        if (status === '') return true;
        return character.status.toLowerCase() === status;
    });

    return (
        <div className="whole-page">
        <Container className="char-page">
            <h1 className="text-center" style={{ paddingTop: '50px', paddingBottom: '50px' }}>Characters</h1>
            <Search setSearch={() => {}}setPageNumber={setPageNumber} />
                <Row className="justify-content-center" >
                    <Row className="mb-4">
                        <Col>
                        <Filter 
                        handleFilterChange={handleFilterChange} 
                        handleClearFilters={handleClearFilters}
                        />
                        </Col>
                    </Row>
                    {/* Cards */}
                
                        <Row>
                            {filteredResults.map((character) => (
                                <Col key={character.id} lg={6} md={10} sm={12} xs={12} className="mb-4">
                                    <CardsPage character={character} />
                                </Col>
                            ))}
                        </Row>
                    
                    {/* Pagination */}
                    <Col lg={4} md={8} sm={8} className="text-right">
                      <PaginationBar
                        pageNumber={pageNumber}
                        info={info}
                        handlePageChange={handlePageChange}
                        />
                    </Col>
                </Row>
                </Container>
        </div>
    )
}

export default CharactersPage