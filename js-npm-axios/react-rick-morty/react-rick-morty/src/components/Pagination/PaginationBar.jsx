import { Pagination } from 'react-bootstrap';


function PaginationBar({ pageNumber, info, handlePageChange }) {
    const renderPaginationItems = () => {
        const items = [];
    
       
        if (info.pages) {
            const maxVisiblePages = 5; // Maximum number of page blocks to show
            const ellipsisThreshold = 3; // ellipsis
        
            if (info.pages <= maxVisiblePages) {
              // Display all pages when there are fewer pages than maxVisiblePages
              for (let i = 1; i <= info.pages; i++) {
                items.push(
                  <Pagination.Item
                    key={i}
                    active={i === pageNumber}
                    onClick={() => handlePageChange(i)}
                  >
                    {i}
                  </Pagination.Item>
                );
              }
            } else if (pageNumber <= ellipsisThreshold + 1) {
              // Display the first block of pages (1, 2, 3, 4, 5, ...)
              for (let i = 1; i <= maxVisiblePages; i++) {
                items.push(
                  <Pagination.Item
                    key={i}
                    active={i === pageNumber}
                    onClick={() => handlePageChange(i)}
                  >
                    {i}
                  </Pagination.Item>
                );
              }
        
              // Add ellipsis if necessary
              if (info.pages > maxVisiblePages + 1) {
                items.push(<Pagination.Ellipsis key="ellipsis1" />);
              }
            } else if (pageNumber >= info.pages - maxVisiblePages + 1) {
              // Display the last block of pages (... 38, 39, 40, 41, 42)
              if (pageNumber > ellipsisThreshold + 1) {
                items.push(<Pagination.Ellipsis key="ellipsis1" />);
              }
        
              for (let i = Math.max(info.pages - maxVisiblePages + 1, 1); i <= info.pages; i++) {
                items.push(
                  <Pagination.Item
                    key={i}
                    active={i === pageNumber}
                    onClick={() => handlePageChange(i)}
                  >
                    {i}
                  </Pagination.Item>
                );
              }
            } else {
              // Display a block with ellipsis in the middle (1, 2, ... 5, 6, ...)
              if (pageNumber > ellipsisThreshold + 1) {
                items.push(<Pagination.Ellipsis key="ellipsis1" />);
              }
        
              for (let i = pageNumber - 2; i <= pageNumber + 2; i++) {
                items.push(
                  <Pagination.Item
                    key={i}
                    active={i === pageNumber}
                    onClick={() => handlePageChange(i)}
                  >
                    {i}
                  </Pagination.Item>
                );
              }
        
              if (info.pages > pageNumber + 2) {
                items.push(<Pagination.Ellipsis key="ellipsis2" />);
              }
            }
        
            // Previous page
            items.unshift(
              <Pagination.Prev
                key="prev"
                onClick={() => handlePageChange(pageNumber - 1)}
                disabled={pageNumber === 1}
              />
            );
        
            // First page
            items.unshift(
              <Pagination.First
                key="first"
                onClick={() => handlePageChange(1)}
              />
            );
        
            // Next page
            items.push(
              <Pagination.Next
                key="next"
                onClick={() => handlePageChange(pageNumber + 1)}
                disabled={pageNumber === info.pages}
              />
            );
        
            // Last page
            items.push(
              <Pagination.Last
                key="last"
                onClick={() => handlePageChange(info.pages)}
              />
            );
          }
        
          return items;
        };

        return (
            <Pagination>{renderPaginationItems()}</Pagination>
        )
}

export default PaginationBar