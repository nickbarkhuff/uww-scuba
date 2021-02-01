import React from "react";

export const YouTubeEmbed = (props) => (
    <div className="YouTubeEmbedParent">
        <iframe
            className="YouTubeEmbedChild"
            src={props.src}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
        />
    </div>
);