import React, {useEffect} from 'react';

const Modal = ({detail}) => {
    useEffect(() => {
        document.querySelector(".modal-title").textContent = detail.title;
        document.querySelector(".actors").textContent = detail.actors;
        document.querySelector(".ratings").textContent = detail.ratings;
        document.querySelector(".plot").textContent = detail.plot;
    }, [detail])

    return (
        <div className="blok-modal">
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{detail.title}</h5>
                    </div>
                    <div className="modal-body">
                        <table className="table" 
                            style={{
                                textAlign: "left"
                            }}
                        >
                            <tbody>
                                <tr>
                                    <td style={{width: "30%"}}>Actors</td>
                                    <td>:</td>
                                    <td className="actors">{detail.actors}</td>
                                </tr>
                                <tr>
                                    <td style={{width: "30%"}}>IMDB Ratings : </td>
                                    <td>:</td>
                                    <td className="ratings">{detail.ratings}</td>
                                </tr>
                                <tr>
                                    <td style={{width: "30%"}}>Plot : </td>
                                    <td>:</td>
                                    <td className="plot">{detail.plot}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
