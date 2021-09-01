import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();
        // console.log("hello i am an constructor from news components")
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }
     async componentDidMount(){
        // console.log("hello i am componentdidmount")
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=29c6f2c7515a4d0b8969ab099786967b&page-1&pagesize=20"
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData)
        this.setState({articles:parsedData.articles})
    }
    handleNextclick= async()=>{
        if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

        }
        else{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=29c6f2c7515a4d0b8969ab099786967b&page=${this.state.page+1}&pagesize=20`
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData)
        this.setState({
            page: this.state.page+1,
            articles:parsedData.articles,
            totalResults:parsedData.totalResults
        })
        
    }
}
    handlePreviousclick= async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=29c6f2c7515a4d0b8969ab099786967b&page=${this.state.page-1}&pagesize=20`
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData)
        this.setState({
            page: this.state.page-1,
            articles:parsedData.articles

        })
    }
    render() {
        // console.log("this is render")
        return (
            <div className="container my-3">
                <h1>NewsFlow - Top Headlines</h1>
                <div className="row my-2">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                })}
                
                </div>
                <div className="container d-flex justify-content-between">
                <button type="button" disabled={this.state.page<=1} class="btn btn-dark " onClick={this.handlePreviousclick}> &larr; previous</button>
                <button type="button" className="btn btn-dark " onClick={this.handleNextclick}>next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News
