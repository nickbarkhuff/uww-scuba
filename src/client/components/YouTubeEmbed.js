import React from "react";

export const YouTubeEmbed = (props) => (
    <div className={props.className || ""}>
        <div className="posRelative pIframe wFull hNone">
            <iframe
                className="posAbsolute wFull hFull top0 left0"
                src={props.src}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
            />
        </div>
    </div>
);