import './Blog.css'

export default function Blog(props){
    return(
        <div className="blog">
                <div className="image">
                    <img src={props.items.img} />
                </div>
                <div className="info">
                    <div className="loc-link">
                        <span className="country"><b>{props.items.country}</b></span>
                        <span className="link"><a href={props.items.link}>Visit Here</a></span>
                    </div>
                    <div className="title">
                        <h2>{props.items.title}</h2>
                    </div>
                    <div className="date-desc">
                        <p className='date'>{props.items.date}</p>
                        <p className="desc">{props.items.description}</p>
                    </div>
                </div>
        </div>
    )
}