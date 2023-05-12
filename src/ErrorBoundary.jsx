import { Component } from "react";

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        console.error('error', error)
        console.error('error info', errorInfo)
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }


    render() {
        if(this.state.hasError) {
            return (
                <h3>Error in my site</h3>
            )
        }
        if(this.props?.children) {
            return this.props?.children
        }
        return null
    }
}

export default ErrorBoundary