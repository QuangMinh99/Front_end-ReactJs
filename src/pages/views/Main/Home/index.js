import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Home = ({ products, onRemove }) => {
  const removeHandle = (id) => {
    onRemove(id)
}
    return (
        <div>
            <div className="container">
  <div className="row">
    <div className="col-lg-3">
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        <a href="#" className="list-group-item">Category 1</a>
        <a href="#" className="list-group-item">Category 2</a>
        <a href="#" className="list-group-item">Category 3</a>
      </div>
    </div>
    {/* /.col-lg-3 */}
    <div className="col-lg-9">
      <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="row">
      {products.map(({ id, name, image, price }, index) => (
        <div className="col-lg-4 col-md-6 mb-4" key={index}>
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src={image} alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">{name}</a>
              </h4>
              <h5>{price}</h5>
              <p className="card-text">{id}</p>
            </div>
            <div className="card-footer">
            {/* <button className="btn btn-primary" onClick={() => removeHandle(id)}>Xóa</button> */}
            </div>
          </div>
        </div>
      ))}
      </div>
      {/* /.row */}
    </div>
    {/* /.col-lg-9 */}
  </div>
  {/* /.row */}
</div>

        </div>
    )
}

Home.propTypes = {

}

export default Home