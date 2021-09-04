import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
      let {title,description,imageUrl,newsUrl}=this.props
    return (
      <div className="my-2">
        <div className="card">
          <img src={imageUrl?imageUrl:"https://images.hindustantimes.com/img/2021/09/01/1600x900/pjimage_-_2021-09-01T103901.666_1630473166523_1630473180964.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...

            </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
