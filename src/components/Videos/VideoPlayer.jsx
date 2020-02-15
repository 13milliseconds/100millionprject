import React from 'react'
import './VideoPlayer.scss'
import ReactPlayer from 'react-player'

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    
        this.toggleVideo = this.toggleVideo.bind(this)
    }
    
    toggleVideo () { 
        this.setState({
            active: !this.state.active
        })
    }

    render() {

        return (
            <div className="video-player">
                <a onClick={this.toggleVideo}>{this.props.children}</a>

                {this.state.active &&
                    <div className="video-player-wrap" onClick={this.toggleVideo}>
                    <div className="video-player-container" >
                        <div className="video-player-ratio" >
                        <ReactPlayer
                            playing
                            url={"https://player.vimeo.com/video/" + this.props.vimeoID}
                            width="100%"
                            height="100%"
                        />
                    </div>
                    </div>
                    <h3>{this.props.title}</h3>
                    </div>
                }
            </div>
        )
    }
}

export default VideoPlayer