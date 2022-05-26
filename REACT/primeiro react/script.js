const root = document.getElementById("root")

const title = React.createElement( "h1",{id: "title"}, "Hello World" )

const prgph = React.createElement( "p", {id: "paragraph"}, "Lorem Ipsum" )

const container = React.createElement( "div", null, title, prgph )


ReactDOM.render(container, root)