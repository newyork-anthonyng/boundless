/* eslint no-unused-expressions:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Simulate} from 'react-addons-test-utils';

import UITokenizedInput from '../../UITokenizedInput';
import conformanceChecker from '../../UIUtils/conform';
import noop from '../../UIUtils/noop';

import sinon from 'sinon';

describe('UITokenizedInput', () => {
    const mountNode = document.body.appendChild(document.createElement('div'));
    const render = vdom => ReactDOM.render(vdom, mountNode);

    const entities = [
        { text: 'apple' },
        { text: 'apricot' },
        { text: 'grape' }
    ];

    afterEach(() => ReactDOM.unmountComponentAtNode(mountNode));

    it('conforms to the UIKit prop interface standards', () => conformanceChecker(render, UITokenizedInput));

    describe('accepts', () => {
        it('arbitrary HTML attributes via props.inputProps', () => {
            const element = render(<UITokenizedInput inputProps={{'data-id': 'foo'}} />);
            const node = element.refs.typeahead.refs.input;

            expect(node.getAttribute('data-id')).toBe('foo');
        });

        it('additional classes via props.inputProps.className', () => {
            const element = render(<UITokenizedInput inputProps={{className: 'foo'}} />);
            const node = element.refs.typeahead.refs.input;

            expect(node.classList.contains('foo')).toBe(true);
        });

        it('an additional class as a string without replacing the core hook', () => {
            const element = render(<UITokenizedInput className='foo' />);
            const node = element.refs.wrapper;

            ['ui-tokenfield-wrapper', 'foo'].forEach(name => expect(node.classList.contains(name)).toBe(true));
        });
    });

    describe('CSS hook', () => {
        it('ui-tokenfield-wrapper should be rendered', () => {
            const element = render(<UITokenizedInput />);
            const node = element.refs.wrapper;

            expect(node.className).toContain('ui-tokenfield-wrapper');
        });

        it('ui-tokenfield should be rendered', () => {
            const element = render(<UITokenizedInput />);
            const node = element.refs.wrapper.querySelector('.ui-tokenfield');

            expect(node).not.toBe(null);
        });

        it('ui-tokenfield-tokens should be rendered', () => {
            const element = render(<UITokenizedInput />);
            const node = element.refs.wrapper.querySelector('.ui-tokenfield-tokens');

            expect(node).not.toBe(null);
        });

        it('ui-tokenfield-token should be rendered', () => {
            const element = render(<UITokenizedInput entities={entities} tokens={[0]} />);
            const node = element.refs.wrapper.querySelector('.ui-tokenfield-token');

            expect(node).not.toBe(null);
        });

        it('ui-tokenfield-token-selected should be rendered', () => {
            const element = render(<UITokenizedInput entities={entities} tokens={[0]} tokensSelected={[0]} />);
            const node = element.refs.wrapper.querySelector('.ui-tokenfield-token-selected');

            expect(node).not.toBe(null);
        });

        it('ui-tokenfield-token-close should be rendered', () => {
            const element = render(<UITokenizedInput entities={entities} tokens={[0]} tokensSelected={[0]} />);
            const node = element.refs.wrapper.querySelector('.ui-tokenfield-token-close');

            expect(node).not.toBe(null);
        });

        it('ui-tokenfield-token-close not should be rendered if `showTokenClose` is `false`', () => {
            const element = render(<UITokenizedInput showTokenClose={false} entities={entities} tokens={[0]} tokensSelected={[0]} />);
            const node = element.refs.wrapper.querySelector('.ui-tokenfield-token-close');

            expect(node).toBe(null);
        });
    });

    describe('props.tokens', () => {
        it('should be rendered to the UI as token children', () => {
            const element = render(
                <UITokenizedInput entities={entities} tokens={[0, 1]} />
            );

            expect(element.refs['token_0'].textContent).toBe('apple');
            expect(element.refs['token_1'].textContent).toBe('apricot');
        });
    });

    describe('interactive token creation', () => {
        it('should occur upon entity selection', () => {
            const stub = sinon.stub();
            const element = render(<UITokenizedInput defaultValue='ap' entities={entities} handleAddToken={stub} />);
            const typeahead = element.refs.typeahead;

            typeahead.handleKeyDown({
                key: 'Enter',
                nativeEvent: {preventDefault: noop},
                target: typeahead.getInputNode()
            });

            expect(stub.calledOnce).toBe(true);
            expect(stub.calledWithMatch(0)).toBe(true);
        });
    });

    describe('interactive token removal', () => {
        it('should occur when pressing the Backspace key with a selected token', () => {
            const stub = sinon.stub();
            const element = render(<UITokenizedInput entities={entities} tokens={[0, 1]} tokensSelected={[1]} handleRemoveTokens={stub} />);
            const typeahead = element.refs.typeahead;

            element.handleKeyDown({key: 'Backspace', preventDefault: noop});

            expect(stub.calledOnce).toBe(true);
            expect(stub.calledWithMatch([1])).toBe(true);
        });

        it('should occur when clicking a token\'s "close" handle', () => {
            const stub = sinon.stub();
            const element = render(<UITokenizedInput entities={entities} tokens={[0, 1]} tokensSelected={[1]} handleRemoveTokens={stub} />);
            const typeahead = element.refs.typeahead;

            element.handleTokenCloseClick(1);

            expect(stub.calledOnce).toBe(true);
            expect(stub.calledWithMatch([1])).toBe(true);
        });
    });

    describe('token selection', () => {
        it('should occur when pressing the left arrow key at the start of the input field', () => {
            const stub = sinon.stub();
            const element = render(<UITokenizedInput entities={entities} tokens={[0, 1]} handleNewSelection={stub} />);
            const typeahead = element.refs.typeahead;

            typeahead.focusInput();
            element.handleKeyDown({key: 'ArrowLeft'});

            expect(stub.calledOnce).toBe(true);
            expect(stub.calledWithMatch([1])).toBe(true);
        });

        it('should not change if pressing the left arrow key with the only token already selected', () => {
            const stub = sinon.stub();
            const element = render(<UITokenizedInput entities={entities} tokens={[0]} tokensSelected={[0]} handleNewSelection={stub} />);
            const typeahead = element.refs.typeahead;

            typeahead.focusInput();
            element.handleKeyDown({key: 'ArrowLeft'});

            expect(stub.called).toBe(false);
        });

        it('should deselect if pressing the right arrow key with the only token already selected and focus the input', () => {
            const stub = sinon.stub();
            const element = render(<UITokenizedInput entities={entities} tokens={[0]} tokensSelected={[0]} handleNewSelection={stub} />);
            const typeahead = element.refs.typeahead;

            element.refs.wrapper.querySelector('.ui-tokenfield-token').focus();
            element.handleKeyDown({key: 'ArrowRight'});

            expect(stub.calledOnce).toBe(true);
            expect(stub.calledWithMatch([])).toBe(true);
            expect(document.activeElement).toBe(typeahead.getInputNode());
        });

        it('should move rightward if the rightmost token is not selected on right arrow key press', () => {
            const stub = sinon.stub();
            const element = render(<UITokenizedInput entities={entities} tokens={[0, 1]} tokensSelected={[0]} handleNewSelection={stub} />);
            const typeahead = element.refs.typeahead;

            element.refs.wrapper.querySelector('.ui-tokenfield-token').focus();
            element.handleKeyDown({key: 'ArrowRight'});

            expect(stub.calledOnce).toBe(true);
            expect(stub.calledWithMatch([1])).toBe(true);
        });
    });

    describe('multiple token selection', () => {
        it('should occur when pressing the shift and left arrow keys', () => {
            const stub = sinon.stub();
            const element = render(<UITokenizedInput entities={entities} tokens={[0, 1]} tokensSelected={[1]} handleNewSelection={stub} />);
            const typeahead = element.refs.typeahead;

            typeahead.focusInput();
            element.handleKeyDown({
                key: 'ArrowLeft',
                shiftKey: true
            });

            expect(stub.calledOnce).toBe(true);
            expect(stub.calledWithMatch([0, 1])).toBe(true);
        });

        it('should occur when pressing the shift and right arrow keys', () => {
            const stub = sinon.stub();
            const element = render(<UITokenizedInput entities={entities} tokens={[0, 1]} tokensSelected={[0]} handleNewSelection={stub} />);
            const typeahead = element.refs.typeahead;

            typeahead.focusInput();
            element.handleKeyDown({
                key: 'ArrowRight',
                shiftKey: true
            });

            expect(stub.calledOnce).toBe(true);
            expect(stub.calledWithMatch([0, 1])).toBe(true);
        });
    });

    describe('input focus', () => {
        it('should clear any token selection', () => {
            const stub = sinon.stub();
            const element = render(<UITokenizedInput entities={entities} tokens={[0, 1]} tokensSelected={[1]} handleNewSelection={stub} />);
            const typeahead = element.refs.typeahead;

            Simulate.focus(typeahead.refs.input);

            expect(stub.calledOnce).toBe(true);
            expect(stub.calledWithMatch([])).toBe(true);
        });
    });
});
