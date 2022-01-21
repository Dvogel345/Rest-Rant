const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className='inactive'>
            No ratings yet
        </h3>
    )
    let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
    }, 0)
    let averageRating = sumRatings / data.place.comments.length
    rating = (
        <h3>
        {averageRating} stars
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
          return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
          stars += '⭐️'
        }
        rating = (
          <h3>
            {stars} stars
          </h3>
        )
      }
    return (
        <Def>
            <main>
                <div className='row'>
                    <div className='col-sm-6'>    
                        <h1>{data.place.name}</h1>
                        <img src={data.place.pic} alt={data.place.name} /> <br />
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                    </div>
                    <div className='col-sm-6'>
                        <h2>Rating</h2>
                        {rating}
                        <br />
                        <h2>Description</h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                        <div>
                            <a href={`/places/${data.id}/edit`} className="btn btn-warning" value="Edit Comment">
                            </a>
                            <form method="POST" action={`/places/${data.id}/comment/${c.id}?_method=DELETE`} >
                                <button type="submit" className="btn btn-danger" value="Delete Comment">
                                </button>
                            </form>
                        </div>    
                    </div>
                </div>
                <div className='row'>
                    <h2>Comments</h2>
                    <a href={`/places/${data.place.id}/rant`}>
                        Add a comment
                    </a>
                    {comments}
                </div>
            </main>
        </Def>
    )
}
module.exports = show