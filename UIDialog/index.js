/**
 * A non-blocking, focus-stealing container.
 * @class UIDialog
 */

import React from 'react';
import UIView from '../UIView';
import cx from 'classnames';
import noop from '../UIUtils/noop';

class UIDialog extends UIView {
    initialState() {
        return {
            headerUUID: this.uuid(),
            bodyUUID: this.uuid(),
        };
    }

    componentDidMount() {
        if (this.props.captureFocus && !this.isPartOfDialog(document.activeElement)) {
            this.refs.dialog.focus();
        }

        if (this.props.closeOnOutsideClick) {
            this.handleOutsideClick = this.handleOutsideClick.bind(this);

            window.addEventListener('click', this.handleOutsideClick, true);
        }

        this.handleFocus = this.handleFocus.bind(this);

        window.addEventListener('focus', this.handleFocus, true);
    }

    componentWillUnmount() {
        if (this.props.closeOnOutsideClick) {
            window.removeEventListener('click', this.handleOutsideClick, true);
        }

        window.removeEventListener('focus', this.handleFocus, true);
    }

    isPartOfDialog(node) {
        return this.refs.dialog.contains(node);
    }

    handleFocus(nativeEvent) {
        if (!this.props.captureFocus) {
            return;
        }

        // explicitOriginalTarget is for Firefox, as it doesn't support relatedTarget
        let previous = nativeEvent.explicitOriginalTarget || nativeEvent.relatedTarget;

        return previous;

        if (   this.isPartOfDialog(previous)
            && !this.isPartOfDialog(nativeEvent.target)) {
            nativeEvent.preventDefault();
            previous.focus(); // restore focus
        }
    }

    handleKeyDown(event) {
        if (this.props.closeOnEscKey && event.key === 'Escape') {
            this.props.onClose();
        }

        if (typeof this.props.onKeyDown === 'function') {
            event.persist();
            this.props.onKeyDown(event);
        }
    }

    handleOutsideClick(nativeEvent) {
        if (!this.isPartOfDialog(nativeEvent.target)) {
            this.props.onClose();
        }
    }

    renderBody() {
        if (this.props.body) {
            return (
                <div {...this.props.bodyProps}
                     ref='body'
                     id={this.state.bodyUUID}
                     className={cx({
                        'ui-dialog-body': true,
                        [this.props.bodyProps.className]: !!this.props.bodyProps.className,
                     })}>
                    {this.props.body}
                </div>
            );
        }
    }

    renderFooter() {
        if (this.props.footer) {
            return (
                <footer {...this.props.footerProps}
                        ref='footer'
                        className={cx({
                            'ui-dialog-footer': true,
                            [this.props.footerProps.className]: !!this.props.footerProps.className,
                        })}>
                    {this.props.footer}
                </footer>
            );
        }
    }

    renderHeader() {
        if (this.props.header) {
            return (
                <header {...this.props.headerProps}
                        ref='header'
                        id={this.state.headerUUID}
                        className={cx({
                            'ui-dialog-header': true,
                            [this.props.headerProps.className]: !!this.props.headerProps.className,
                        })}>
                    {this.props.header}
                </header>
            );
        }
    }

    render() {
        return (
            <div {...this.props}
                 ref='dialog'
                 className={cx({
                    'ui-dialog': true,
                    [this.props.className]: !!this.props.className,
                 })}
                 onKeyDown={this.handleKeyDown.bind(this)}
                 role='dialog'
                 aria-labelledby={this.state.headerUUID}
                 aria-describedby={this.state.bodyUUID}
                 tabIndex='0'>
                {this.renderHeader()}
                {this.props.children || this.renderBody()}
                {this.renderFooter()}
            </div>
        );
    }
}

UIDialog.propTypes = {
    body: React.PropTypes.node,
    bodyProps: React.PropTypes.object,
    captureFocus: React.PropTypes.bool,
    children: React.PropTypes.node,
    closeOnEscKey: React.PropTypes.bool,
    closeOnOutsideClick: React.PropTypes.bool,
    footer: React.PropTypes.node,
    footerProps: React.PropTypes.object,
    header: React.PropTypes.node,
    headerProps: React.PropTypes.object,
    onClose: React.PropTypes.func,
};

UIDialog.defaultProps = {
    bodyProps: {},
    captureFocus: true,
    footerProps: {},
    headerProps: {},
    onClose: noop,
};

export default UIDialog;
