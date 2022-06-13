import React from "react";

export function Welcome () {
    return (
        <div className="container my-3">
            <div className="card">
                <h5 className="card-header"></h5>
                <div className="card-body">
                <h5 className="card-title1"> A warm welcome!</h5>
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="#" className="btn btn-primary">Call to action!</a>
                </div>
             </div>
        </div>
    );
}

