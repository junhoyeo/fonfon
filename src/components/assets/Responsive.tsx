import React, { Component } from 'react';

interface ResponsiveProps {
    mobile: React.ComponentElement<any, any>;
    pc: React.ComponentElement<any, any>;
}

class Responsive extends Component<ResponsiveProps> {
    state = {
        isSmallScreen: false,
    };

    mediaQuery = window.matchMedia('(max-width: 768px)');

    componentDidMount(): void {
        /*
            addEventListener 는 safari 에서 오류가 발생하여,
            addEventListener 를 사용하지 못할 경우에는
            deprecated 된 addListener 를 사용하게 한다.
            (정상 작동 확인하였음)

            eventListener 를 unMount 할때는 모든 event listener 를 unMount 한다.

         */
        try {
            this.mediaQuery.addEventListener('change', this.handleMediaQueryChange);
        } catch (e) {
            this.mediaQuery.addListener(this.handleMediaQueryChange);
        }
        this.handleMediaQueryChange(this.mediaQuery);
    }

    componentWillUnmount(): void {
        this.mediaQuery.removeEventListener('change', this.handleMediaQueryChange);
        this.mediaQuery.removeListener(this.handleMediaQueryChange);
    }

    handleMediaQueryChange = (mediaQuery: any): void => {
        if (mediaQuery.matches) {
            this.setState({ isSmallScreen: true });
        } else {
            this.setState({ isSmallScreen: false });
        }
    };

    render(): React.ComponentElement<any, any> {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                {this.state.isSmallScreen ? this.props.mobile : this.props.pc}
            </div>
        );
    }
}

export default Responsive;
