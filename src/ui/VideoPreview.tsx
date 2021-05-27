import * as React from 'react'

import './VideoPreview.css'

function VideoPreview() {
    return (
        <section className="video-preview">
            <figure className="item thumbnail" />
            <div className="info">
                <div className="left">
                    <figure className="avatar item" />
                </div>
                <div className="right">
                    <figure className="title item text" />
                    <figure className="channel-name item text" />
                    <div className="stats">
                        <figure className="item text" />
                        <figure className="item text" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoPreview