

// step-1 : define component-class

// (pure Javascript )

// class Greeting extends React.Component {
//     render() {
//         let spanEle = React.createElement('span',
//             { className: 'badge badge-primary' },
//             'hello world');
//         let divEle = React.createElement(
//             'div',
//             { className: 'alert alert-info' },
//             spanEle);
//         return divEle;
//     }
// }


// or  ( using JSX )
class Greeting extends React.Component {
    render() {
       return (
           <div className="alert alert-info">
               <span className="badge badge-primary">Hello World</span>
           </div>    
       );
    }
}


// step-2 : instantiate component-class
// let greeting = React.createElement(Greeting, null, null);
// or
let greeting=<Greeting />
ReactDOM.render(greeting, document.getElementById('root'));