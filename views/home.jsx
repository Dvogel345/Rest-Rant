const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <div className="wrapper">
                    <h1>REST-Rant</h1>
                    <div>
                        <img src="../images/chicken-kale.jpg" alt="Chicken and Kale" />
                        <div>
                            Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/s/photos/cooked-eggpllant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </div>
                    </div>
                    <div>
                        <img src="../images/eggplant-parm-toastado.jpg" alt="Eggplant Parm Toastado" />
                        <div>
                        Photo by <a href="https://unsplash.com/@ferhadd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Farhad Ibrahimzade</a> on <a href="https://unsplash.com/s/photos/cooked-eggplant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </div>
                    </div>
                    <div>
                        <img src="../images/burger.jpg" alt="Burger with veggies" />
                        <div>
                        Photo by <a href="https://unsplash.com/@picoftasty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mae Mu</a> on <a href="https://unsplash.com/s/photos/burger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </div>
                    </div>
                    <a href="/places">
                        <button className='btn-primary'>Places Page</button>
                    </a>
                    <div className="push"></div>
                </div>
                <footer className="footer">
                    <div className='extra-links' className="row">
                        <h2><a href="https://www.facebook.com/derek.vogel.75/"><i className="fab fa-facebook"></i></a></h2>
                        <h2><a href="https://www.linkedin.com/in/derekvogel20/"><i className="fab fa-linkedin"></i></a></h2>
                        <h2><a href="https://github.com/Dvogel345"><i className="fab fa-github"></i></a></h2>
                    </div>
                </footer>
            </main>
        </Def>
    )
}

module.exports = home