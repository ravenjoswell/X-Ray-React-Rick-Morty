import { useState } from 'react';
import "./Filter.css"

const Filter = ({ handleFilterChange, handleClearFilters }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    const handleStatusFilter = (status) => {
        handleFilterChange(status);
        setIsExpanded(false); 
    };
    
    const FilterButton = ({ text, status, handleStatusFilter }) => {
        return (
            <button
                className={`btn btn-outline-${getStatusColor(status)} mb-2`}
                onClick={() => handleStatusFilter(status)}
            >
                {text}
            </button>
        );
    };
    
    const getStatusColor = (status) => {
        switch (status) {
            case 'alive':
                return 'success';
            case 'dead':
                return 'danger';
            case 'unknown':
                return 'secondary';
            default:
                return 'primary';
        }
    };
    
    return (
        <div className="filter-container">
            <h2 className="filter-header">
                <button
                    className={`filter-header-button ${isExpanded ? 'active' : ''}`}
                    type="button"
                    onClick={toggleAccordion}
                    aria-expanded={isExpanded}
                >
                    Filter
                    <span className={`accordion-icon ${isExpanded ? 'up' : 'down'}`}>&#9654;</span>
                </button>
            </h2>
            <div className={`filter-body ${isExpanded ? 'show' : ''}`}>
                <FilterButton text="Alive" status="alive" handleStatusFilter={handleStatusFilter} />
                <FilterButton text="Dead" status="dead" handleStatusFilter={handleStatusFilter} />
                <FilterButton text="Unknown" status="unknown" handleStatusFilter={handleStatusFilter} />
                <hr />
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => {
                        handleClearFilters();
                        setIsExpanded(false); 
                    }}
                >
                    Clear Filters
                </button>
            </div>
        </div>
    );
};


export default Filter;