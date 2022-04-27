import * as React from "react";
import ErrorScreen from "./error/errorScreen";
import { withRouter } from 'react-router-dom';

class ErrorBoundary extends React.Component{
    pathName;
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidMount() {
        this.pathName = this.props.history.location.pathname
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidUpdate(prevProps) {
        const { history } = this.props;
        if(history.location.pathname !== this.pathName) {
            this.setState({hasError: false});
            this.pathName = history.location.pathname;
        }
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {
        if(this.state.hasError) {
            return (<ErrorScreen />)
        }
        return this.props.children;
    }
}

export default withRouter(ErrorBoundary)
