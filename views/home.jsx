const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main> 
                <h1>HOME</h1>
                <div>
                    <img src="../images/chicken-kale.jpg" alt="Chicken and Kale" />
                    <div>
                        Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/s/photos/cooked-eggpllant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home