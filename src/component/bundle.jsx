import React, {Component} from 'react';
import Loading from './loading/loading.jsx';

// export default class Bundle extends Component {
//     constructor(props) {
//         super(props)
//     }

//     componentWillMount() {
//         this.load(this.props)
//     }

//     componentWillReceiveProps(nextProps) {
//         if (nextProps.load !== this.props.load) {
//             this.load(nextProps)
//         }
//     }

//     load = (props) => {
//         this.setState({
//             mod:null
//         })

//         props.load((mod) => {
//             this.setState({
//                 mod:mod.default?mod.default:mod
//             })
//         })
//     }

//     render() {
//         return this.props.children(this.state.mod)
//     }
// }



const Bundle = loadComponent => (
    class AsyncComponent extends React.Component {
        state = {
            Component: null,
        }

        componentWillMount() {
            if (this.hasLoadedComponent()) {
                return;
            }

            loadComponent()
                .then(module => module.default)
                .then((Component) => {
                    this.setState({ Component });
                })
                .catch((err) => {
                    console.error(`Cannot load component in <AsyncComponent />`);
                    throw err;
                });
        }

        hasLoadedComponent() {
            return this.state.Component !== null;
        }

        render() {
            const { Component } = this.state;
            return (Component) ? <Component {...this.props} /> : <Loading/>;
        }
    }
);

export default Bundle;