import React, {useState} from 'react';

const Modal = ({detail}) => {
    // const [detailObj , setDetailObj] = useState({});
    
    // if (Object.keys(detail).length !== 0) {
    //     setDetailObj({
    //         actors: detail.Actors, 
    //         director: detail.Director,
    //         genre: detail.Genre,
    //         plot: detail.Plot,
    //         poster: detail.Poster,
    //         rating: detail.imdbRating,
    //         release: detail.release,
    //         runtime: detail.runtime
    //     })
    //     console.log(detailObj)
    // }    
    // console.log("detail di Modal.js")
    // console.log(detail)

    return (
        <div className="blok-modal">
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{detail.Title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* {
                            (
                                <div>
                                    <p>Actors: {idResponse.Actors}</p>
                                    <p>Actors: {idResponse.Actors}</p>
                                    <p>Actors: {idResponse.Actors}</p>
                                    <p>Actors: {idResponse.Actors}</p>
                                    <p>Actors: {idResponse.Actors}</p>
                                    <p>Actors: {idResponse.Actors}</p>
                                    <p>Actors: {idResponse.Actors}</p>
                                </div>
                            )
                        } */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
