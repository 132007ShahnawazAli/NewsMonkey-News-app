import React from 'react'

function Spinner() {
    return (
        <>
            <div className="text-center">
                <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status"></div>
            </div>
        </>
    )
}

export default Spinner;

{/* <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
<div className="text-center">
    <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
</div>
</div> */}