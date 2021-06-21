import React, {Component} from 'react'
import './Counter.css'

class FooterComponent extends Component {
    render(){
        return (
            <footer className = "footer">
                <div className = "text-muted foxed-bottom">Footer</div>
                    {/* <spam className = "text-muted">Footer</spam> */}
            </footer>
        )
    }
}
export default FooterComponent;