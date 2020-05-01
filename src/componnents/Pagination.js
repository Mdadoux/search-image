import React from 'react';
const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    const pagesNumber = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pagesNumber.push(i)
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">

                {pagesNumber.map(number => (
                    <li className="page-item" key={number}>
                        <a onClick={() => paginate(number)} className="page-link" href="!#">{number}</a>
                    </li>

                ))}
            </ul>
        </nav>
    )
}
export default Pagination;