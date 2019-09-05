import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatImgArr } from '../common';
import "./SliderCard.css";

export default class SliderCard extends Component {
    constructor(props) {
        super(props);
        this.current = 0;
        this.rotator = null;
        this.imgRefs = [];
        this.arrImages = formatImgArr(this.props.images);
    }

    componentWillUnmount() {
        if (this.rotator) {
            clearInterval(this.rotator);
        }
        this.rotator = null;
    }

    render() {
        return (
            <div className="slider-card">
                <div className="slider-card-container"
                    onMouseOver={this.showImages} onMouseLeave={this.removeRodator}>
                    {
                        this.buildImgNodes()
                    }
                </div>

                <div className="slider-card-info">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.description}</p>
                </div>
            </div>

        )
    }

    setImageRefs = (imgRef) => {
        this.imgRefs.push(imgRef);
    }

    showImages = () => {
        const limit = (this.imgRefs.length - 1);
        if (this.rotator) {
            return;
        }
        this.rotator = setInterval(() => {
            if (this.current === limit) {
                this.rotateLastOne();
                this.current = 0;
                return;
            }
            this.rotateImage(this.current);
            this.current++;
        }, 1400)

    }

    removeRodator = () => {
        clearInterval(this.rotator);
        this.rotateToFirstImage();
        this.rotator = null;
        this.current = 0;
    }

    rotateImage(currentImage) {
        const nextImage = currentImage + 1;
        const imgTagCurrent = this.imgRefs[currentImage];
        const imgTagNext = this.imgRefs[nextImage];
        this.tagsTransition(imgTagCurrent, imgTagNext);
    }

    rotateLastOne() {
        const imgTagLast = this.imgRefs[this.imgRefs.length - 1];
        const imgTagFirst = this.imgRefs[0];
        this.tagsTransition(imgTagLast, imgTagFirst);
    }

    rotateToFirstImage() {
        const imgTagCurrent = this.imgRefs[this.current];
        const imgTagFirst = this.imgRefs[0];
        this.tagsTransition(imgTagCurrent, imgTagFirst);
    }

    tagsTransition(fromTag, toTag) {
        this.tagAsNotVisible(fromTag);
        this.tagAsVisible(toTag);
    }

    tagAsNotVisible(imgTag) {
        imgTag.classList.remove("img-card-visible");
        imgTag.classList.add("img-card-hidden");
    }
    tagAsVisible(imgTag) {
        imgTag.classList.remove("img-card-hidden");
        imgTag.classList.add("img-card-visible");
    }

    buildImgNodes = () => {
        let imgNodes = [];
        const objImg = this.arrImages.shift();
        const imgVisible = "slider-card-overlay img-card-visible";
        const imgHidden = "slider-card-overlay img-card-hidden";
        imgNodes.push(<img key={objImg.id} ref={this.setImageRefs} className={imgVisible} src={objImg.url} alt="pet" />)

        const imgTags = this.arrImages.map((element) => {
            return <img key={element.id} ref={this.setImageRefs} className={imgHidden} src={element.url} alt="pet" />
        })
        imgNodes.push(imgTags);
        return imgNodes;
    }

}

SliderCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.array.isRequired
};