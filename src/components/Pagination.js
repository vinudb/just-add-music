import React from 'react';

const Pagination = (props) =>{
    return( 
        <div className="displayFlexHorizontal">
            <div className="prevButtonContainer">
                {
                    props.page > 1 &&
                    <button
                        className="prevButton"
                        onClick={props.onPreviousClick}>
                        Previous
                </button>
                }
            </div>

            <div className="nextButtonContainer">
                {
                    props.page < props.totalPages &&
                    <button
                        className="nextButton"
                        onClick={props.onNextClick}>
                        Next
                </button>
                }
            </div>
        </div>
    );
}

export default Pagination;