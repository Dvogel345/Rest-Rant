const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="../styles.css" />
            </head>
            <body>
                <nav>
                    <ul>
                        <li key="uniqueId1">
                            <a href="/">Home</a>
                        </li>
                        <li key="uniqueId2">
                            <a href="/places">Places</a>
                        </li>
                        <li key="uniqueId3">
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def