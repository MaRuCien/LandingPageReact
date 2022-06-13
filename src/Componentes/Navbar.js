import React from "react";

export function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#"> Start Bootstrap </a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbar"
					aria-controls="navbar"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbar">
					<div className="navbar-nav">
						<a className="nav-link active" aria-current="page" href="#"> Home </a>
						<a className="nav-link" href="#"> About </a>
						<a className="nav-link" href="#"> Services </a>
						<a className="nav-link" href="#" tabIndex="-1" aria-disabled="true"> Contact </a>
					</div>
				</div>
			</div>
		</nav>
       );
}
