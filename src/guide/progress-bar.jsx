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

const stepNames = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'];

const steps = ['first', 'second', 'third', 'fourth', 'fifth'];

export class ProgressIndicatorWithError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStepIndex: 1,
        };
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
    }

    handleNextClick() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex < stepNames.length - 1) {
            const nextStepIndex = currentStepIndex + 1;
            return this.setState({ currentStepIndex: nextStepIndex });
        }
        return this.setState({ isNextDisabled: false });
    }

    handleBackClick() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex > 0) {
            const previewStepIndex = currentStepIndex - 1;
            this.setState({ currentStepIndex: previewStepIndex });
        }
    }

    isNextDisabled() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex < stepNames.length - 1 && currentStepIndex >= 0) {
            return false;
        }
        return true;
    }

    isBackDisabled() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex > 0 && currentStepIndex < stepNames.length) {
            return false;
        }
        return true;
    }

    render() {
        const { currentStepIndex } = this.state;
        return (
            <div className="rainbow-m-bottom_large rainbow-p-bottom_large">

                <ProgressIndicator currentStepName={stepNames[currentStepIndex]}>
                    <ProgressStep name="step-1" label="Step 1" />
                    <ProgressStep name="step-2" label="Step 2" />
                    <ProgressStep name="step-3" label="Step 3" hasError />
                    <ProgressStep name="step-4" label="Step 4" />
                    <ProgressStep name="step-5" label="Step 5" />
                </ProgressIndicator>
                <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap">
                    <p>{`This is the ${steps[currentStepIndex]} step`}</p>
                </div>
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

