import React from 'react';
import classes from './work.module.css'
import ClipLoader from "react-spinners/ClipLoader";

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            iframeLoadedAmount: 0
        };

    }

    hideSpinner = () => {
        this.setState({
            loading: false
        });
    };

    getTracksCodes() {
        return [
            '4v5g1A7ps9TvnUSwySOJJt',
            '1AU6XWoKia2VNwfUuXN1J7',
            '54DlEaaW7guY92vCe1LYFa',
            '259hAuHoAhqzpDHAnYptHt',
            '1s7FQO4DU76KL3SSkxKf9r',
            '71kwq4Fw03VPw9FvDvmrv0',
            // '6Kk5vXE4zwbylQfhD9kfCv',
            // '0kdOP1fzdJWgsWJUVdu1nU',
        ];
    }

    iframeLoadedAmountAdd = () => {
        let iframeLoadedAmount = this.state.iframeLoadedAmount
        iframeLoadedAmount++;
        this.setState({iframeLoadedAmount: iframeLoadedAmount});
        if (this.state.iframeLoadedAmount === this.getTracksCodes().length - 1) {
            this.hideSpinner();
        }
    }

    getTracksIframes() {
        let res = [];
        const tracks = this.getTracksCodes()
        tracks.forEach((value) => {
            let src = `https://open.spotify.com/embed/track/${value}`
            res.push(
                <div className={classes.track}>
                    <iframe
                        src={src}
                        width="300"
                        height="380"
                        frameBorder="0"
                        allowTransparency="true"
                        allow="encrypted-media"
                        onLoad={this.iframeLoadedAmountAdd}
                    />
                </div>
            )
        })
        return res;
    }

    render() {
        return (
            <React.Fragment>
                {this.state.loading ? (
                    <ClipLoader
                        css={'text-align: center; display: block; margin: auto; top: 50%;'}
                        size={200}
                        color={"#fff"}
                        loading={this.state.loading}
                    />
                ) : null}

                <div
                    className={classes.workWrapper}
                    style={{display: this.state.loading ? 'none' : 'block' }}
                >
                    {this.getTracksIframes()}
                    <div
                        className={classes.vimeo}
                        style={{display: this.state.loading ? 'none' : 'block' }}
                    >
                        <iframe
                            className={classes.vimeoIframe}
                            src="https://player.vimeo.com/video/320441870?color=ce0000"
                            // width="908"
                            // height="506"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        />
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

Work.propTypes = {};

export default Work;