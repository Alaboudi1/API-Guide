import React from 'react';
import {
    ProgressIndicator,
    ProgressStep,
    ButtonGroup,
    ButtonIcon,
    Button,

} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';



export class ProgressIndicatorWithError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStepIndex: 0,
        };
        this.stepNames = props.steps.map((_, index) => `step-${index}`);
         console.log(props.steps)
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
    }
    handleNextClick() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex < this.stepNames.length - 1) {
            const nextStepIndex = currentStepIndex + 1;
            this.props.changeStep(nextStepIndex);
            return this.setState({ currentStepIndex: nextStepIndex });
        }
        return this.setState({ isNextDisabled: false });
    }

    handleBackClick() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex > 0) {
            const previewStepIndex = currentStepIndex - 1;
            this.props.changeStep(previewStepIndex);
            this.setState({ currentStepIndex: previewStepIndex });
        }
    }

    isNextDisabled() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex < this.stepNames.length - 1 && currentStepIndex >= 0) {
            return false;
        }
        return true;
    }

    isBackDisabled() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex > 0 && currentStepIndex < this.stepNames.length) {
            return false;
        }
        return true;
    }

    render() {
        const { currentStepIndex } = this.state;

        return (
            <div className="rainbow-m-bottom_large rainbow-p-bottom_large">

                <ProgressIndicator currentStepName={this.stepNames[currentStepIndex]}>
                    {this.props.steps.map((done, index) => (
                        <ProgressStep name={`step-${index}`} label={`Step ${index}`} hasError={done} />
                    ))}
                </ProgressIndicator>
                {/* <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap">
                    <p>{`This is the ${steps[currentStepIndex]} step`}</p>
                </div> */}
                <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap">
                    <Button
                        label="Back"
                        onClick={this.handleBackClick}
                        variant="neutral"
                        disabled={this.isBackDisabled()}
                        className="rainbow-m-horizontal_medium"
                    />
                    <Button
                        label="Next"
                        onClick={this.handleNextClick}
                        variant="brand"
                        disabled={this.isNextDisabled()}
                        className="rainbow-m-horizontal_medium"
                    />
                </div>
            </div>
        );
    }
}

